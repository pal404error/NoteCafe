import React, { useState } from "react";
import firebase from "../../firebase";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User logged in already or has just logged in.
    console.log(user.uid);
  } else {
    // User not logged in or has just logged out.
  }
});



export default async function Forms() {
  const [title, setTitle] = useState("");
  const userData = async() => {
    const user = await firebase.auth().onAuthStateChanged();
    return user;
  }
  const user = await userData();
  const userId = user.uid;
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = async (event) => {
    event.preventDefault();
    console.log(title)
    try{
      console.log(firebase.database())
      const todoRef = firebase.database().ref("Todo");
      const todo = {
        title,
        complete: false,
      };
      await todoRef.push(todo);      
      setTitle("");
    }catch(e){
      console.log(e)
    }
    
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