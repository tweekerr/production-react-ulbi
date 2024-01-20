import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Button } from 'shared/ui/Button/Button';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('main_page')}
      <BugButton />
      <Button>Привіт</Button>
    </div>
  );
};

export default MainPage;
