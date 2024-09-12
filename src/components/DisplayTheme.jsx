import React from "react";
import { useTheme } from "./ThemeContext";

const DisplayTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Uso de useContext para el Tema</h2>
      <p>El tema actual es: {theme}</p>
      <button onClick={toggleTheme}>
        Cambiar a {theme === "light" ? "oscuro" : "claro"} tema
      </button>
    </div>
  );
};

export default DisplayTheme;
