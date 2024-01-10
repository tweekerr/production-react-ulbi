import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme,
  square?: boolean,
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, square,
    size = ButtonSize.M, ...rest
  } = props;

  const mods: Record<string, boolean> = {
    [cl[theme]]: !!theme,
    [cl.square]: square,
  };

  return (
    <button
      type="button"
      {...rest}
      className={classNames(cl.button, mods, [className, cl[size]])}
    >
      {children}
    </button>
  );
};
