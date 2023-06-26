import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('PageError')}</p>
      <Button onClick={reloadPage}>
        {t('ReloadPage')}
      </Button>
    </div>
  )
}
