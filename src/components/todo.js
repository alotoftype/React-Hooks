import React from "react";

export function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}
export default Todo;
