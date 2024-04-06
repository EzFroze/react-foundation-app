import { ArticleList, ArticleView } from "entities/Article";
import { type FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  return (
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
      <ArticleList view={ArticleView.BIG} articles={[]} isLoading />
    </div>
  );
};

export default memo(ArticlesPage);
