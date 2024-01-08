import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { type Profile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "./validateProfileData";

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

describe("validateProfileData", () => {
  test("success", async () => {
    const result = validateProfileData(userData);
    expect(result).toEqual([]);
  });

  test("without firstname and lastname", async () => {
    const result = validateProfileData({
      ...userData,
      first: "",
      lastname: "",
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({
      ...userData,
      age: undefined,
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("without country", async () => {
    const result = validateProfileData({
      ...userData,
      country: undefined,
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("without all", async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test("without user data", async () => {
    const result = validateProfileData();
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});
