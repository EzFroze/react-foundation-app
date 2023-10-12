import { type ReactRenderer } from "@storybook/react";
import { type PartialStoryFn } from "@storybook/types";
import { Suspense } from "react";

export const suspenseDecorator = (
  Story: PartialStoryFn<ReactRenderer, Record<string, any>>
) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Story />
    </Suspense>
  );
};
