import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./components/todo";
import "./styles.css";
import { format } from "path";

function TodoForm({ addToDo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("this is my value", e, value);
    if (!value) return;
    addToDo("greeting");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="todo"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn About React",
      isComplete: false
    },
    {
      text: "Meet Friend for lunch",
      isComplete: false
    },
    {
      text: "Build a really cool todo app",
      isComplete: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    console.log("this is my text:", text);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addToDo={addTodo} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
