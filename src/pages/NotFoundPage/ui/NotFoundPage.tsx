import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cl from './NotFoundPage.module.scss';

interface NotFoundPageProps{
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cl.notFoundPage, {}, [className])}>
      {t('not_found_page')}
    </div>
  );
};
