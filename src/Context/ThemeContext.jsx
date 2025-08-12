import { createContext, useState, useContext } from "react";
import { useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark((prev) => !prev);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#18181b" : "white";
    document.body.style.color = dark ? "#f3f4f6" : "#18181b";
  }, [dark]);
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}

//overflow elipse css
