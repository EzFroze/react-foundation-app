import axios from "axios";
import { type User, userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
  test("success login", async () => {
    const userData = { username: "123", id: "1" };

    mockedAxios.post.mockReturnValue(
      Promise.resolve<{ data: User }>({
        data: userData,
      })
    );

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userData)
    );
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(userData);
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(
      // eslint-disable-next-line prefer-promise-reject-errors
      Promise.reject({
        status: 403,
      })
    );

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("loginFormAuthError");
  });
});
