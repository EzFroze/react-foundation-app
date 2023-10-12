import { type DeepPartial } from "@reduxjs/toolkit";
import { type ReactRenderer } from "@storybook/react";
import { type PartialStoryFn } from "@storybook/types";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const storeDecorator = (state: DeepPartial<StateSchema>) => {
  return (Story: PartialStoryFn<ReactRenderer, Record<string, any>>) => {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
  };
};
