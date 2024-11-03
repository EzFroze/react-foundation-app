import {
  ArticleList,
  type ArticleView,
  ArticleViewSelector,
} from "entities/Article";
import { initArticlesPage } from "pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage";
import { type FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  type ReducersList,
  useDynamicModuleLoader,
} from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "shared/ui/Page/Page";
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from "../../model/slice/articlePageSliceSlice";
import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  useDynamicModuleLoader({ reducers, removeAfterUnMount: false });
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <Page
      onScrollEnd={onLoadNextPart}
      className={classNames(styles.ArticlesPage, {}, [className])}
    >
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </Page>
  );
};

export default memo(ArticlesPage);
