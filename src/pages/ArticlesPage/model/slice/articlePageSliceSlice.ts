import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { type Article, ArticleView } from "entities/Article";
import { ARTICLES_VIEW_LOCALE_STORAGE_KEY } from "shared/const/localstorage";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { type ArticlePageSchema } from "../types/articlePageSchema";

const initialState: ArticlePageSchema = {
  isLoading: false,
  error: undefined,
  view: ArticleView.SMALL,
  entities: {},
  ids: [],
  page: 1,
  limit: 5,
  hasMore: true,
  _inited: false,
};

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage ?? articlesAdapter.getInitialState(initialState)
);

export const articlePageSlice = createSlice({
  name: "articlePageSlice",
  initialState:
    articlesAdapter.getInitialState<ArticlePageSchema>(initialState),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALE_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCALE_STORAGE_KEY
      ) as ArticleView;
      state.view = view;

      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          articlesAdapter.addMany(state, action.payload);
          state.isLoading = false;
          state.hasMore = action.payload.length > 0;
        }
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlePageActions, reducer: articlePageReducer } =
  articlePageSlice;
