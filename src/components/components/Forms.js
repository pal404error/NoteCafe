import React, { useState } from "react";
import firebase from "../../firebase";
import { firebaseIdGenerator } from "../../funFirebase";

export default function Forms() {
  const [title, setTitle] = useState("");
  const [idUser, setIdUser] = useState(null);
  React.useEffect(() => {
    const generateIdToken = async() => {
      const id = await firebaseIdGenerator();
      setIdUser(id);
    }
    generateIdToken();
  },[])

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const createTodo = async (event) => {
    event.preventDefault();
    console.log(title)
    try{
      console.log(firebase.database())
      const todoRef = firebase.database().ref("Todo").child(idUser);
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

  if(idUser){
    return(
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
    )
  }else{
    return (
      <h1>Loading Horela Hai......</h1>
      );
  }
  
}
