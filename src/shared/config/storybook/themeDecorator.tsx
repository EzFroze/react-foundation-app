import { type ReactRenderer } from "@storybook/react";
import { type PartialStoryFn, type StoryContext } from "@storybook/types";
import {
  type THEME,
  ThemeContext,
  ThemeProvider,
} from "app/providers/ThemeProvider";
import { type FC, useContext, useEffect } from "react";

interface ThemeSetProps {
  currentTheme: string;
}

const ThemeSet: FC<ThemeSetProps> = ({ currentTheme, children }) => {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme(currentTheme as THEME);
  }, [currentTheme, setTheme]);

  return <>{children}</>;
};

export const themeDecorator = (
  Story: PartialStoryFn<ReactRenderer, Record<string, any>>,
  context: StoryContext<ReactRenderer, Record<string, any>>
) => {
  const globals = context.globals;
  const pageTheme = typeof globals.theme === "string" ? globals.theme : "";

  return (
    <ThemeProvider>
      <div
        className="app"
        style={{
          minHeight: "100%",
        }}
      >
        <ThemeSet currentTheme={pageTheme}>
          <Story />
        </ThemeSet>
      </div>
    </ThemeProvider>
  );
};
