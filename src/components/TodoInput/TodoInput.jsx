import React from "react";
import { FaPlus } from "react-icons/fa";
import "./TodoInput.css";

function TodoInput({ input, setInput, onAdd }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        className="todo-input__field"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="New task"
      />
      <button
        className="todo-input__add-btn"
        onClick={onAdd}
        aria-label="Add task"
      >
        <FaPlus />
        <span className="todo-input__add-text">Add</span>
      </button>
    </div>
  );
}

export default TodoInput;
