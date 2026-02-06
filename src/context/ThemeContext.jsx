import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Update localStorage and DOM when theme changes
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);

    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.setAttribute("data-theme", "dark");
      htmlElement.classList.add("dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
      htmlElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
