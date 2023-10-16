import { type StateSchema } from "app/providers/StoreProvider";
import { initialState } from "../../slice/loginSlice";

export const getLoginState = (state: StateSchema) =>
  state?.loginForm ? state.loginForm : initialState;
