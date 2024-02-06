import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { type Comment } from "entities/Comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { type ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const initialState: ArticleDetailsCommentsSchema = {
  isLoading: false,
  ids: [],
  entities: {},
  error: undefined,
};

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) =>
    state.articleDetailsComments ??
    commentsAdapter.getInitialState(initialState)
);

const articleDetailsCommentSlice = createSlice({
  name: "articleDetailsCommentSlice",
  initialState:
    commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          commentsAdapter.setAll(state, action.payload);
          state.isLoading = false;
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentReducer } =
  articleDetailsCommentSlice;
