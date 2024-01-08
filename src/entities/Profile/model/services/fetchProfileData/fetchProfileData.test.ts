import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { type Profile } from "../../types/profile";
import { fetchProfileData } from "./fetchProfileData";

const userData: Profile = {
  first: "Piter",
  lastname: "Parker",
  country: Country.Kazakhstan,
  currency: Currency.USD,
  city: "Moscow",
  username: "Vaspupka",
  avatar: "https://avatars.githubusercontent.com/u/43078049?v=4",
};

describe("fetchProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(
      Promise.resolve<{ data: Profile }>({
        data: userData,
      })
    );

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(userData);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(
      // eslint-disable-next-line prefer-promise-reject-errors
      Promise.reject({
        status: 403,
      })
    );

    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
