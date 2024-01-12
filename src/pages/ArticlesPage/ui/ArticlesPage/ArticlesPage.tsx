import { type FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
      ARTICLES PAGE
    </div>
  );
};

export default memo(ArticlesPage);
