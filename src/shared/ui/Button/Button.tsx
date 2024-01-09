import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './Button.module.scss';

export enum ButtonTheme{
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, ...rest
  } = props;

  return (
    <button
      type="button"
      {...rest}
      className={classNames(cl.button, { [cl[theme]]: !!theme }, [className])}
    >
      {children}
    </button>
  );
};
