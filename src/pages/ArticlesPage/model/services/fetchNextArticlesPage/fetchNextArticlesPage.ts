import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
} from "../../selectors/articlesPageSelectors";
import { articlePageActions } from "../../slice/articlePageSliceSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<
  unknown,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const hasMore = getArticlesPageHasMore(getState());
  const page = getArticlesPageNumber(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlePageActions.setPage(page + 1));
    dispatch(
      fetchArticlesList({
        page: page + 1,
      })
    );
  }
});
