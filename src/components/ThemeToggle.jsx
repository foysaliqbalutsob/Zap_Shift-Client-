import React from "react";
import { useTheme } from "../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-circle btn-ghost"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <MdDarkMode className="h-6 w-6" />
    </button>
  );
};

export default ThemeToggle;
