import React from "react";
import TodoItem from "../TodoItem/TodoItem.jsx";
import "./TodoList.css";

function TodoList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="todo-list todo-list--empty">
        <p>No tasks here. Add one above to get started.</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
