import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm", () => {
  const form = {
    first: "Piter",
    lastname: "Parker",
    country: Country.Kazakhstan,
    currency: Currency.USD,
    city: "Moscow",
    username: "Vaspupka",
    avatar: "https://avatars.githubusercontent.com/u/43078049?v=4",
  };
  test("should return initial state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test("should return empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
