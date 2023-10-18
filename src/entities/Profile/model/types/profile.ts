import { type County, type Currency } from "shared/const/common";

export interface Profile {
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: County;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  readonly: boolean;
  isLoading: boolean;
  data?: Profile;
  errorI18nKey?: string;
}
