import { type FC, type HTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: FC<CardProps> = memo(
  ({ className, children, ...otherProps }) => {
    return (
      <div className={classNames(styles.Card, {}, [className])} {...otherProps}>
        {children}
      </div>
    );
  }
);
