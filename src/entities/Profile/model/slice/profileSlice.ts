import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { type Profile, type ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  errorI18nKey: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.errorI18nKey = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.data = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorI18nKey = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
