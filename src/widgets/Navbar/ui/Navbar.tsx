import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cl from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(cl.navbar, {}, [className])}>
      <div className={cl.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cl.mainLink}>Main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
      </div>
    </div>
  );
};