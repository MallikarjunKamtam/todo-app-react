import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div>
      <li>{props.text}</li>
    </div>
  );
}

export default Todo;
