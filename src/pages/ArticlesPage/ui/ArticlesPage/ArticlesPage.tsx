import {
  ArticleList,
  type ArticleView,
  ArticleViewSelector,
} from "entities/Article";
import { type FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  type ReducersList,
  useDynamicModuleLoader,
} from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
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
  useDynamicModuleLoader({ reducers });
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlePageActions.initState());
  });

  return (
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <ArticleList view={view} articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default memo(ArticlesPage);
