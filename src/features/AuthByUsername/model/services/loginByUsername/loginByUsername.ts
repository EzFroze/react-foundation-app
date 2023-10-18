import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type User, userActions } from "entities/User";
import { USER_LOCALE_STORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:8000/login", {
      username,
      password,
    });

    localStorage.setItem(
      USER_LOCALE_STORAGE_KEY,
      JSON.stringify(response.data)
    );

    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return thunkAPI.rejectWithValue("loginFormAuthError");
  }
});
