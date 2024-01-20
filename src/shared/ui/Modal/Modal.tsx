import React, {
  FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cl from './Modal.module.scss';

interface ModalProps {
  className?: string,
  children?: ReactNode,
  isOpen?: boolean,
  onClose?: () => void
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, isOpen = false, onClose,
  } = props;

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [cl.opened]: isOpen,
    [cl.isClosing]: isClosing,
  };

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  function onContentClickHandler(e: MouseEvent) {
    e.stopPropagation();
  }

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler();
    }
  }, [onCloseHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cl.modal, mods, [className, cl[theme]])}>
        <div className={cl.overlay} onClick={onCloseHandler}>
          <div className={cl.content} onClick={onContentClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
