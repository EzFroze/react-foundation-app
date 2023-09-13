import { type ReactRenderer } from "@storybook/react";
import { type PartialStoryFn } from "@storybook/types";
import { BrowserRouter } from "react-router-dom";

export const routeDecorator = (
  Story: PartialStoryFn<ReactRenderer, Record<string, any>>
) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
