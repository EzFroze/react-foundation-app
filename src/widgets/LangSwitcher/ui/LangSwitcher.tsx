import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={toggle}
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {t('language')}
    </Button>
  )
}
