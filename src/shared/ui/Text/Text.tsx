import { type FC, memo, type ReactNode, useMemo } from "react";
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

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

interface TextProps {
  className?: string;
  title?: ReactNode;
  text?: ReactNode;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text: FC<TextProps> = memo(
  ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  }) => {
    const additionalClasses = useMemo(
      () => [className, styles[theme], styles[align], styles[size]],
      [align, className, size, theme]
    );

    return (
      <div className={classNames("", {}, additionalClasses)}>
        {title ? <p className={styles.title}>{title}</p> : null}
        {text ? <p className={styles.text}>{text}</p> : null}
      </div>
    );
  }
);
