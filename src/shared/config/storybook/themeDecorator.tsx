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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <ThemeProvider initialTheme={pageTheme}>
      <div
        className="app"
        style={{
          minHeight: "100%",
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  );
};
