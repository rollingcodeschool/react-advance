import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [themeState, setThemeState] = useState({
    isLightTheme: true,
    dark: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    light: { syntax: '#ddd', ui: '#333', bg: '#555' }
  });

  const toggleTheme = () => setThemeState({ ...themeState, isLightTheme: !themeState.isLightTheme });

  return (
    <ThemeContext.Provider value={{ ...themeState, toggleTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };