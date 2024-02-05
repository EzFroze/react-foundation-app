import { type FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text } from "shared/ui/Text/Text";
import { type Comment } from "../../model/types/comment";
import styles from "./CommentCard.module.scss";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo(
  ({ className, comment, isLoading }) => {
    if (isLoading) {
      return (
        <div className={classNames(styles.CommentCard, {}, [className])}>
          <div className={styles.header}>
            <Skeleton width={"30px"} height={"30px"} borderRadius={"50%"} />
            <Skeleton
              height={"16px"}
              width={"100px"}
              className={styles.username}
            />
          </div>
          <Skeleton width={"100%"} height={"50px"} className={styles.text} />
        </div>
      );
    }

    return (
      <div className={classNames(styles.CommentCard, {}, [className])}>
        <div className={styles.header}>
          {comment.user?.avatar ? (
            <Avatar size={30} src={comment.user.avatar} />
          ) : null}
          <Text className={styles.username} title={comment.user.username} />
        </div>
        <Text className={styles.text} text={comment.text} />
      </div>
    );
  }
);
