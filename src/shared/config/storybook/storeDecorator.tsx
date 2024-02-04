import { type ReactRenderer } from "@storybook/react";
import { type PartialStoryFn } from "@storybook/types";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { type ReducersList } from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
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
