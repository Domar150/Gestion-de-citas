import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`${styles.themeToggleBtn} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      {theme === "light" ? "🌙 Oscuro" : "☀️ Claro"}
    </button>
  );
}