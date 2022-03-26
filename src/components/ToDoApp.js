import React from "react";
import "./ToDoApp.css";
import Forms from "./components/Forms";
import TodoList from "./components/TodoList";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Title />
        </div>
        <div>
          <Forms />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}
