import axios from "axios";
import { USER_LOCALE_STORAGE_KEY } from "shared/const/localstorage";

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALE_STORAGE_KEY),
  },
});
