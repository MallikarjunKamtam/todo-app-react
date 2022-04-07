import "./App.css";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <form className="form" action="">
        <input
          className="input-field"
          placeholder="Enter the text here"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          disabled={!input}
          className="submit-button"
          type="submit"
          onClick={addTodo}
        >
          Add Text
        </button>
      </form>

      <ul className="todo-item">
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
