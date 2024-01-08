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
    let newTheme: THEME;
    switch (theme) {
      case THEME.DARK:
        newTheme = THEME.LIGHT;
        break;
      case THEME.LIGHT:
        newTheme = THEME.ORANGE;
        break;
      case THEME.ORANGE:
        newTheme = THEME.DARK;
        break;
      default:
        newTheme = THEME.LIGHT;
    }
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
