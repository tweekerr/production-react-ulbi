import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cl from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cl.navbar, {}, [className])}>
    <div className={cl.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cl.mainLink}>Main</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
    </div>
  </div>
);
