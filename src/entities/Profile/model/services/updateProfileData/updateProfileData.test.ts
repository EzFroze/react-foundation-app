import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { type Profile, ValidateProfileError } from "../../types/profile";
import { updateProfileData } from "./updateProfileData";

const userData: Profile = {
  first: "Piter",
  lastname: "Parker",
  country: Country.Kazakhstan,
  currency: Currency.USD,
  city: "Moscow",
  username: "Vaspupka",
  avatar: "https://avatars.githubusercontent.com/u/43078049?v=4",
  age: 22,
};

describe("updateProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: userData },
    });

    thunk.api.put.mockReturnValue(
      Promise.resolve<{ data: Profile }>({
        data: userData,
      })
    );

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(userData);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: userData },
    });

    thunk.api.put.mockReturnValue(
      // eslint-disable-next-line prefer-promise-reject-errors
      Promise.reject({
        status: 403,
      })
    );

    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...userData, lastname: "" } },
    });

    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
