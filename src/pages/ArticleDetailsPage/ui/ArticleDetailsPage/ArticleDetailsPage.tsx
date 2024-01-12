import { type FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      ARTICLE DETAILS
    </div>
  );
};

export default memo(ArticleDetailsPage);
