import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cl from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cl.sidebar, { [cl.collapsed]: collapsed }, [className])}
    >
      <div className={cl.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cl.item}
        >
          <MainIcon className={cl.icon} />
          <span className={cl.link}>
            {t('main')}
          </span>
        </AppLink>
        <AppLink
          className={cl.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
        >
          <AboutIcon className={cl.icon} />
          <span className={cl.link}>
            {t('about')}
          </span>
        </AppLink>
      </div>

      <Button
        data-testid="toggle_button"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        type="button"
        onClick={onToggle}
        className={cl.collapseButton}
        size={ButtonSize.L}
        square
      >
        {
          collapsed ? '>' : '<'
        }
      </Button>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          short={collapsed}
          className={cl.languageSwitcher}
        />
      </div>
    </div>
  );
};
