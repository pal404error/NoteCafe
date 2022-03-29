import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import Todo from "./Todo";
import { firebaseIdGenerator } from "../../funFirebase";


export default function TodoList() {
  const [idUser, setIdUser] = useState(null);
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const generateIdToken = async() => {
      const id = await firebaseIdGenerator();
      setIdUser(id);
    }
    generateIdToken();
  },[])

  console.log("Pal Chutiya hai: ", idUser);
  
  useEffect(() => {
    if(idUser){
          const todoRef = firebase.database().ref("Todo").child(idUser);
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      /*  todos
      {
        MeO6HU67vtmhgubBmxr: {complete: false, title: "study"},
        MeOATRs4Yu045jFboYZ: {complete: false, title: "sleep"}
      }

      */
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      /*
      [
        {id: "-MeO6HU67vtmhgubBmxr", complete: false, title: "study"},
        {id: "-MeOATRs4Yu045jFboYZ", complete: false, title: "sleep"}...
      ]
      */
      setTodoList(todoList);
      console.log("todoList->", todoList);
    })
    }else{
      setTodoList([]);
      console.log("todoList->", todoList);
    }

  }, [idUser]);

  if(idUser){
    return (
      <div>
        {todoList
          ? todoList.map((todo, index) => <Todo todo={todo} idUser={idUser} key={index} />)
          : ""}
      </div>
    );
  }
  else{
    return(
      <h1>Loading Horelaa hai.....</h1>
    )
  }
  
}
