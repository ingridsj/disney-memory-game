import React, { createContext, ReactNode, useContext, useState, useMemo } from "react";
import { Theme, themeDark, themeLight } from "utils/theme";

type ThemeContextProviderProps = {
  children: ReactNode;
};

type ThemeState = 'light' | 'dark'

type ThemeContextType = {
  themeState: ThemeState
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProviderContext({ children }: ThemeContextProviderProps) {
  const [ themeState, setTheme ] = useState<ThemeState>('light')
  const [ currentTheme, setCurrentTheme ] = useState<Theme>(themeLight);

  function toggleTheme() {
    if(themeState === 'light') {
      setTheme('dark')
      setCurrentTheme(themeDark)
    } else {
      setTheme('light')
      setCurrentTheme(themeLight)
    }
  }

  console.log(themeState)

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, themeState, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
