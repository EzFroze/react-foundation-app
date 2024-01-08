import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "entities/Profile";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe("getProfileValidateErrors", () => {
  test("should return no data error", () => {
    const errors = [ValidateProfileError.NO_DATA];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test("should return server error", () => {
    const errors = [ValidateProfileError.SERVER_ERROR];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test("should return incorrect age error", () => {
    const errors = [ValidateProfileError.INCORRECT_AGE];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test("should return incorrect country error", () => {
    const errors = [ValidateProfileError.INCORRECT_COUNTRY];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test("should return incorrect user data error", () => {
    const errors = [ValidateProfileError.INCORRECT_USER_DATA];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test("should return all validate errors", () => {
    const errors = [
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test("should return empty errors", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
  });

  test("should return empty errors", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
