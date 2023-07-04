import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  DEFAULT = 'default',
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Дополнительный класс для кнопки */
  className?: string
  /** Тема кнопки */
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (
  {
    className,
    children,
    theme = ThemeButton.DEFAULT,
    ...btnProps
  }
) => {
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...btnProps}
    >
      {children}
    </button>
  );
};
