import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFound.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.NotFound, {}, [className])}>
      {t('pageNotFound')}
    </div>
  );
};
