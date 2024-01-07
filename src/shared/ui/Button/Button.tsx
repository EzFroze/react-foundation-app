import { type ButtonHTMLAttributes, type FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  DEFAULT = "default",
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outlineRed",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Дополнительный класс для кнопки */
  className?: string;
  /** Тема кнопки */
  theme?: ButtonTheme;
  /** Будет ли кнопка квадратной */
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    square,
    size = ButtonSize.M,
    ...btnProps
  }) => {
    const mods: Record<string, boolean> = {
      [styles.square]: !!square,
      [styles[size]]: !!size,
    };

    return (
      <button
        className={classNames(styles.Button, mods, [className, styles[theme]])}
        {...btnProps}
      >
        {children}
      </button>
    );
  }
);
