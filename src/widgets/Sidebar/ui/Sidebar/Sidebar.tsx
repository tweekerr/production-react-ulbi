import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
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
      <button data-testid="toggle_button" type="button" onClick={onToggle}>{t('toggle')}</button>
      <div className={cl.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cl.languageSwitcher} />
      </div>
    </div>
  );
};
