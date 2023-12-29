import React, {FC} from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import cl from './ThemeSwitcher.module.scss';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme();

  return <Button theme={ButtonTheme.CLEAR} className={classNames(cl.themeSwitcher, {}, [className])}
                 onClick={toggleTheme}>
    {
      theme === Theme.Light
        ? <LightThemeIcon/>
        : <DarkThemeIcon/>
    }
  </Button>
};