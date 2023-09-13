import { type ReactRenderer } from "@storybook/react";
import { type PartialStoryFn, type StoryContext } from "@storybook/types";
import { ThemeProvider } from "app/providers/ThemeProvider";

export const themeDecorator = (
  Story: PartialStoryFn<ReactRenderer, Record<string, any>>,
  context: StoryContext<ReactRenderer, Record<string, any>>
) => {
  const globals = context.globals;
  const pageTheme = typeof globals.theme === "string" ? globals.theme : "";

  return (
    <ThemeProvider>
      <div
        className={`app ${pageTheme}`}
        style={{
          minHeight: "100%",
          font: "var(--font-main)",
          color: "var(--primary-color)",
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  );
};
