import { type ReactRenderer } from "@storybook/react";
import { type PartialStoryFn } from "@storybook/types";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { type ReducersList } from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const storeDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => {
  return (Story: PartialStoryFn<ReactRenderer, Record<string, any>>) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };
};
