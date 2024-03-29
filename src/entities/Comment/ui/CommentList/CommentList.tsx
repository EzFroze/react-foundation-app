import { type FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { type Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";
import styles from "./CommentList.module.scss";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo(
  ({ className, isLoading, comments }) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <div className={classNames("", {}, [className])}>
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </div>
      );
    }

    return (
      <div className={classNames("", {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              isLoading={isLoading}
              className={styles.comment}
              comment={comment}
            />
          ))
        ) : (
          <Text text={t("noComments")} />
        )}
      </div>
    );
  }
);
