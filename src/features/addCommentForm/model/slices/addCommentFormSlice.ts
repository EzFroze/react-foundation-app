import { createSlice } from "@reduxjs/toolkit";
import { type AddCommentFormSchema } from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {
  error: undefined,
  text: "",
};

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    return builder;
  },
});

export const {
  actions: addCommentFormSliceActions,
  reducer: addCommentFormSliceReducer,
} = addCommentFormSlice;
