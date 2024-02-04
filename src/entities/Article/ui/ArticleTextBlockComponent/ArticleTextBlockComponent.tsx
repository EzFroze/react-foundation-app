import { type FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { type ArticleTextBlock } from "../../model/types/article";
import styles from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
  memo(({ className, block }) => {
    return (
      <div
        className={classNames(styles.ArticleTextBlockComponent, {}, [
          className,
        ])}
      >
        {block.title ? (
          <Text title={block.title} className={styles.title} />
        ) : null}
        {block.paragraphs.map((paragraph, index) => {
          return (
            <Text key={index} text={paragraph} className={styles.paragraph} />
          );
        })}
      </div>
    );
  });
