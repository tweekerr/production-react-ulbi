import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cl from './PageError.module.scss';

interface PageErrorProps{
  className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => location.reload();

  return (
    <div className={classNames(cl.pageError, {}, [className])}>
      <p>{t('handled_error')}</p>
      <Button onClick={reloadPage}>
        {t('update_handler_error_page')}
      </Button>
    </div>
  );
};
