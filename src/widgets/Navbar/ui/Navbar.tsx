import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cl from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((p) => !p);
  }, []);

  return (
    <div className={classNames(cl.navbar, {}, [className])}>
      <Button
        className={cl.links}
        onClick={onToggleModal}
        theme={ButtonTheme.CLEAR}
      >
        {t('sign_in')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={() => onToggleModal()}>
        /
      </Modal>
    </div>
  );
};
