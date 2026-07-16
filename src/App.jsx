import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import TodoInput from "./components/TodoInput/TodoInput.jsx";
import Filter from "./components/Filter/Filter.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import "./App.css";

const STORAGE_KEY = "todo-app-tasks";
const THEME_KEY = "todo-app-theme";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_KEY) || "light";
  });

  // Persist tasks
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Persist + apply theme
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const addTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const newTask = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    const trimmed = newText.trim();
    if (!trimmed) return;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, text: trimmed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  const activeCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.length - activeCount;

  return (
    <div className="app">
      <div className="app__container">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <TodoInput input={input} setInput={setInput} onAdd={addTask} />

        <div className="app__toolbar">
          <Filter filter={filter} setFilter={setFilter} />
          <span className="app__counter">
            {activeCount} active &middot; {completedCount} done
          </span>
        </div>

        <TodoList
          tasks={filteredTasks}
          onToggle={toggleComplete}
          onDelete={deleteTask}
          onEdit={editTask}
        />

        {completedCount > 0 && (
          <button className="app__clear-btn" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
