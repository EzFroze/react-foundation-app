import { type FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import EyeIcon from "shared/assets/icons/eye.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import { Text } from "shared/ui/Text/Text";
import {
  type Article,
  ArticleBlockType,
  type ArticleTextBlock,
  ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import styles from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(
  ({ className, article, view }) => {
    const { t } = useTranslation("article");

    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
      navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const types = (
      <Text text={article.type.join(", ")} className={styles.types} />
    );
    const views = (
      <>
        <Text text={article.views.toString()} className={styles.views} />
        <Icon Svg={EyeIcon} />
      </>
    );

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;

      return (
        <div
          className={classNames(styles.ArticleListItem, {}, [
            className,
            styles[view],
          ])}
        >
          <Card>
            <div className={styles.header}>
              <Avatar src={article.user.avatar ?? ""} size={30} />
              <Text text={article.user.username} className={styles.username} />
              <Text text={article.createdAt} className={styles.date} />
            </div>
            <Text title={article.title} className={styles.title} />
            {types}
            <img src={article.img} className={styles.img} alt={article.title} />
            {textBlock ? (
              <ArticleTextBlockComponent
                block={textBlock}
                className={styles.textBlock}
              />
            ) : null}
            <div className={styles.footer}>
              <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                {t("articleReadMore")}
              </Button>
              {views}
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(styles.ArticleListItem, {}, [
          className,
          styles[view],
        ])}
      >
        <Card onClick={onOpenArticle}>
          <div className={styles.imageWrapper}>
            <img src={article.img} alt={article.title} className={styles.img} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <div className={styles.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={styles.title} />
        </Card>
      </div>
    );
  }
);
