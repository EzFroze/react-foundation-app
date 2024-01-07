import { type FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text: FC<TextProps> = memo(
  ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  }) => {
    return (
      <div
        className={classNames("", {}, [
          className,
          styles[theme],
          styles[align],
        ])}
      >
        {title ? <p className={styles.title}>{title}</p> : null}
        {text ? <p className={styles.text}>{text}</p> : null}
      </div>
    );
  }
);
