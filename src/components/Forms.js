import React, { useState } from "react";
import firebase from "../util/firebase";

export default function Forms() {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = (event) => {
    event.preventDefault();
    const todoRef = firebase.database().ref("Todo");
    // const otherRef = firebase.database().ref("other");
    // const other = {
    //   title,
    // };
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
    // otherRef.push(other);
    setTitle("");
  };

  return (
    <form onSubmit={createTodo}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={title}
        required
        onChange={handleChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
}
