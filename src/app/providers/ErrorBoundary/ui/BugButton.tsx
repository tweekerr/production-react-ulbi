import { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
  className?: string
}

// Testing component
export const BugButton: FC<BugButtonProps> = (props) => {
  const { className } = props;
  const [error, setError] = useState<boolean>(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button
      onClick={throwError}
      className={classNames('', {}, [className])}
    >
      throw error
    </Button>
  );
};
