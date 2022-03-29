import React, { useState } from "react";
import firebase from "../../firebase";
import { firebaseIdGenerator } from "../../funFirebase";

// import "../App.css";

export default function Todo({ todo, idUser }) {
  const [newTitle, setNewTitle] = useState("");


  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(idUser).child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(idUser).child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  const editTodo = () => {
    console.log("PALLLLLL MUTIYAA",newTitle)
    const todoRef = firebase.database().ref("Todo").child(idUser).child(todo.id);
    todoRef.update({
      title: newTitle,
    });
  };
  const handleChange = (e) => {
    //e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <li className={todo.complete ? "complete" : "list-item"}>
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />

      {/* <h1 className={todo.complete ? "complete" : ""}>{todo.title}</h1> */}
      <div>
        {/* <button onClick={deleteTodo}>Delete</button>
        <button onClick={completeTodo}>Complete</button> */}

        <button className="button-complete task-button" onClick={completeTodo}>
          <i className="fa fa-check-circle"></i>
        </button>
        <button className="button-edit task-button" onClick={editTodo}>
          <i className="fa fa-edit"></i>
        </button>
        <button className="button-delete task-button" onClick={deleteTodo}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
