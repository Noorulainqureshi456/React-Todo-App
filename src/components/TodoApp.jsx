import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h2>React Todo App</h2>
      <TodoInput task={task} setTask={setTask} handleAdd={handleAdd} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} task={todo} onDelete={() => handleDelete(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
