import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlePageActions } from "../../slice/articlePageSliceSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
  unknown,
  void,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    dispatch(articlePageActions.initState());
    dispatch(
      fetchArticlesList({
        page: 1,
      })
    );
  }
});
