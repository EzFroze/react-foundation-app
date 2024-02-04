import { ArticleCodeBlockComponent } from "entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import { type FC, memo, type ReactNode, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CalendarIcon from "shared/assets/icons/calendar.svg";
import EyeIcon from "shared/assets/icons/eye.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  type ReducersList,
  useDynamicModuleLoader,
} from "shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Icon } from "shared/ui/Icon/Icon";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { type ArticleBlock, ArticleBlockType } from "../../model/types/article";
import styles from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ className, id }) => {
    useDynamicModuleLoader({ reducers: initialReducers });

    const { t } = useTranslation("article");

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return (
            <ArticleCodeBlockComponent
              key={block.id}
              block={block}
              className={styles.block}
            />
          );
        case ArticleBlockType.IMAGE:
          return (
            <ArticleImageBlockComponent
              key={block.id}
              block={block}
              className={styles.block}
            />
          );
        case ArticleBlockType.TEXT:
          return (
            <ArticleTextBlockComponent
              key={block.id}
              className={styles.block}
              block={block}
            />
          );
        default:
          return null;
      }
    }, []);

    useEffect(() => {
      if (__PROJECT__ === "storybook") {
        return;
      }
      dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content: ReactNode;

    if (isLoading) {
      content = (
        <>
          <Skeleton
            width={"200px"}
            height={"200px"}
            borderRadius={"50%"}
            className={styles.avatar}
          />
          <Skeleton width={"300px"} height={"32px"} className={styles.title} />
          <Skeleton
            width={"600px"}
            height={"24px"}
            className={styles.skeleton}
          />
          <Skeleton
            width={"100%"}
            height={"200px"}
            className={styles.skeleton}
          />
          <Skeleton
            width={"100%"}
            height={"200px"}
            className={styles.skeleton}
          />
        </>
      );
    } else if (error) {
      content = (
        <Text title={t("articleErrorLoading")} align={TextAlign.CENTER} />
      );
    } else {
      content = (
        <>
          <div className={styles.avatarWrapper}>
            <Avatar
              size={200}
              src={article?.img ?? ""}
              className={styles.avatar}
            />
          </div>
          <Text
            size={TextSize.L}
            className={styles.title}
            title={article?.title}
            text={article?.subtitle}
          />
          <div className={styles.articleInfo}>
            <Icon Svg={EyeIcon} />
            <Text text={article?.views} />
          </div>
          <div className={styles.articleInfo}>
            <Icon Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </div>
          {article?.blocks.map(renderBlock)}
        </>
      );
    }

    return (
      <div className={classNames(styles.ArticleDetails, {}, [className])}>
        {content}
      </div>
    );
  }
);
