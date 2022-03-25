import React, { useState, useEffect } from "react";
import firebase from "../util/firebase";
import Todo from "./Todo";

export default function TodoList() {
  const [todoList, setTodoList] = useState();
  
  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
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
    });
  }, []);

  return (
    <div>
      {todoList
        ? todoList.map((todo, index) => <Todo todo={todo} key={index} />)
        : ""}
    </div>
  );
}
