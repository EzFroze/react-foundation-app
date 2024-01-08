import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "entities/Profile";
import {
  type Profile,
  type ProfileSchema,
  ValidateProfileError,
} from "../types/profile";
import { profileReducer, profileActions } from "./profileSlice";

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

describe("profileSlice", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data: userData,
      form: { ...userData, username: "" },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      validateError: [],
      data: userData,
      form: userData,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: "123" },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: "test",
        })
      )
    ).toEqual({
      form: {
        username: "test",
      },
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateError: [],
    });
  });

  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(userData, "")
      )
    ).toEqual({
      isLoading: false,
      validateError: [],
      readonly: true,
      form: userData,
      data: userData,
    });
  });
});
