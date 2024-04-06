import { ArticleListItemSkeleton } from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import { type FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { type Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = memo(
  ({ className, articles, isLoading, view = ArticleView.SMALL }) => {
    if (isLoading) {
      return (
        <div
          className={classNames(styles.ArticleList, {}, [
            className,
            styles[view],
          ])}
        >
          {new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((_, i) => (
            <ArticleListItemSkeleton
              view={view}
              key={i}
              className={styles.card}
            />
          ))}
        </div>
      );
    }

    const renderArticle = (article: Article) => {
      return (
        <ArticleListItem
          article={article}
          view={view}
          className={styles.card}
          key={article.id}
        />
      );
    };

    return (
      <div
        className={classNames(styles.ArticleList, {}, [
          className,
          styles[view],
        ])}
      >
        {articles.length > 0 ? articles.map(renderArticle) : null}
      </div>
    );
  }
);
