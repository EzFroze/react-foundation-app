import { type StateSchema } from "app/providers/StoreProvider";
import { initialState } from "../../slice/loginSlice";
import { getLoginState } from "./getLoginState";

describe("getLoginState", () => {
  test("should return initial state", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        ...initialState,
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual(initialState);
  });

  test("should return empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(initialState);
  });

  test("should return state loading true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        ...initialState,
        isLoading: true,
      },
    };
    expect(getLoginState(state as StateSchema).isLoading).toEqual(true);
  });

  test("should return state has error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        ...initialState,
        errorI18nKey: "error",
      },
    };
    expect(getLoginState(state as StateSchema).errorI18nKey).toEqual("error");
  });
});
