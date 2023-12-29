import React, {FC, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cl from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher/ui/LanguageSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {className} = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => setCollapsed(prev => !prev);

  return <div className={classNames(cl.sidebar, {[cl.collapsed]: collapsed}, [className])}>
    <button onClick={onToggle}>Toggle</button>
    <div className={cl.switchers}>
      <ThemeSwitcher/>
      <LanguageSwitcher className={cl.languageSwitcher}/>
    </div>
  </div>;
};