import React, { createContext, useState, useContext } from "react";

// Crear el contexto del tema
const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // 'light' o 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar el contexto
export const useTheme = () => useContext(ThemeContext);
