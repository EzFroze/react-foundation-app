import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { getProfileLoading } from "./getProfileLoading";

describe("getProfileLoading", () => {
  test("should return loading true", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileLoading(state as StateSchema)).toEqual(true);
  });

  test("should return loading false", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    };
    expect(getProfileLoading(state as StateSchema)).toEqual(false);
  });
});
