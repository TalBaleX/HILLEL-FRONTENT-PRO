import React from "react";
import { useTheme } from "/src/context/ThemeContext.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar d-flex justify-content-between align-items-center">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}
