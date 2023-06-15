import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import { THEME, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
      <Button
        className={classNames(styles.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}
        theme={ThemeButton.CLEAR}
      >
        {
          theme === THEME.DARK
            ? <DarkIcon />
            : <LightIcon />
        }
      </Button>
  )
}
