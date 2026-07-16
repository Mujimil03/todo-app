import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Header.css";

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header__spacer" aria-hidden="true"></div>
      <h1 className="header__title">To-Do List</h1>
      <button
        className="header__theme-btn"
        onClick={onToggleTheme}
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
}

export default Header;
