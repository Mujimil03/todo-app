import React, { useState, useRef, useEffect } from "react";
import { FaCheck, FaTrash, FaPen } from "react-icons/fa";
import "./TodoItem.css";

function TodoItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.text);
  const [isLeaving, setIsLeaving] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const commitEdit = () => {
    const trimmed = draft.trim();
    if (trimmed) {
      onEdit(task.id, trimmed);
    } else {
      setDraft(task.text);
    }
    setIsEditing(false);
  };

  const handleEditKeyDown = (e) => {
    if (e.key === "Enter") {
      commitEdit();
    } else if (e.key === "Escape") {
      setDraft(task.text);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    setIsLeaving(true);
    setTimeout(() => onDelete(task.id), 220);
  };

  return (
    <li
      className={`todo-item ${task.completed ? "todo-item--completed" : ""} ${
        isLeaving ? "todo-item--leaving" : ""
      }`}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          className="todo-item__edit-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleEditKeyDown}
          onBlur={commitEdit}
          aria-label="Edit task"
        />
      ) : (
        <span
          className="todo-item__text"
          onDoubleClick={() => setIsEditing(true)}
          title="Double-click to edit"
        >
          {task.text}
        </span>
      )}

      <div className="todo-item__actions">
        {!isEditing && (
          <button
            className="todo-item__btn todo-item__btn--edit"
            onClick={() => setIsEditing(true)}
            aria-label="Edit task"
            title="Edit task"
          >
            <FaPen />
          </button>
        )}

        <button
          className="todo-item__btn todo-item__btn--complete"
          onClick={() => onToggle(task.id)}
          aria-label={task.completed ? "Mark as active" : "Mark as complete"}
          aria-pressed={task.completed}
          title={task.completed ? "Mark as active" : "Mark as complete"}
        >
          <FaCheck />
        </button>

        <button
          className="todo-item__btn todo-item__btn--delete"
          onClick={handleDelete}
          aria-label="Delete task"
          title="Delete task"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
