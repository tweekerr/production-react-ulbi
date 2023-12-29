import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cl from './Button.module.scss';

export enum ButtonTheme{
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const {className, children, theme, ...rest} = props

  return (
    <button {...rest}
            className={classNames(cl.button, {}, [className, cl[theme]])}>
      {children}
    </button>
  );
}; 