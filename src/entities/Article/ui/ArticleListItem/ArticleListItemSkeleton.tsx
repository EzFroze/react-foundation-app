import { type FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ArticleView } from "../../model/types/article";
import styles from "./ArticleListItem.module.scss";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
  ({ className, view }) => {
    if (view === ArticleView.BIG) {
      return (
        <div
          className={classNames(styles.ArticleListItem, {}, [
            className,
            styles[view],
          ])}
        >
          <Card>
            <div className={styles.header}>
              <Skeleton borderRadius={"50%"} width={"30px"} height={"30px"} />
              <Skeleton
                width={"150px"}
                height={"16px"}
                className={styles.username}
              />
              <Skeleton
                width={"150px"}
                height={"16px"}
                className={styles.date}
              />
            </div>
            <Skeleton
              width={"250px"}
              height={"24px"}
              className={styles.title}
            />
            <Skeleton height={"200px"} className={styles.img} />
            <div className={styles.footer}>
              <Skeleton height={"36px"} width={"200px"} />
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
        <Card>
          <div className={styles.imageWrapper}>
            <Skeleton width={"200px"} height={"200px"} className={styles.img} />
          </div>
          <div className={styles.infoWrapper}>
            <Skeleton width={"130px"} height={"16px"} />
          </div>
          <Skeleton width={"150px"} height={"16px"} className={styles.title} />
        </Card>
      </div>
    );
  }
);
