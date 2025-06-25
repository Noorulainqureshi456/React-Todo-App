import React from "react";

const TodoInput = ({ task, setTask, handleAdd }) => {
  return (
    <div className="input-area">
      <input
        type="text"
        value={task}
        placeholder="Enter task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
