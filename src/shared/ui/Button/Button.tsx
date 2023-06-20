import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (
  {
    className,
    children,
    theme = ThemeButton.CLEAR,
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
  )
}
