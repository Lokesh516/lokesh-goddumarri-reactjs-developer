import React, { createContext, useContext, useEffect, useState } from 'react';

// Theme options
type Theme = 'theme1' | 'theme2' | 'theme3';

// Context structure for theme
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Default context value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme1',
  setTheme: () => {},
});

// Theme provider to manage and persist theme state
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'theme1';
  });

  // Update body class and localStorage on theme change
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme context
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
