import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import cl from './PageLoader.module.scss';

interface PageLoaderProps{
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cl.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
