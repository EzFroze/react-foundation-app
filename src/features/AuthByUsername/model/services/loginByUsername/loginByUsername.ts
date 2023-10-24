import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import { type User, userActions } from "entities/User";
import { USER_LOCALE_STORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async ({ username, password }, thunkAPI) => {
  const { dispatch, extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.post("/login", {
      username,
      password,
    });

    localStorage.setItem(
      USER_LOCALE_STORAGE_KEY,
      JSON.stringify(response.data)
    );

    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return rejectWithValue("loginFormAuthError");
  }
});
