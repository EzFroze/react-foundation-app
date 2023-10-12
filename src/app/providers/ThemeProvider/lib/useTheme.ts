import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  /**
   Текущая тема
   */
  theme: THEME;
  /**
   Смена темы
   */
  toggleTheme: () => void;
}
export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
