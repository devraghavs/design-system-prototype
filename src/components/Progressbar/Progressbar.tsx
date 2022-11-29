import { useEffect, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';
import Styles from './Progressbar.module.css';
type ProgressbarProps = {
  value?: number;
  max?: number;
  className?: string;
  dataTestId?: string;
};

const Progressbar = (props: ProgressbarProps) => {
  const {
    value = 0,
    max = 100,
    className = '',
    dataTestId = 'xt-ui-kit-progressbar-component',
  } = props;
  const [progress, setProgress] = useState(value);
  useEffect(() => {
    setProgress(value);
  }, [value]);
  return (
    <div data-testid={dataTestId} className={`${Styles.progresscontainer} ${className}`}>
      <Progress.Root
        value={value}
        max={max}
        className={`${Styles.progressbar}`}
        aria-labelledby='progressbar'
        aria-hidden='true'
      >
        <Progress.Indicator
          style={{ transform: `translateX(-${100 - progress}%)` }}
          className={`${Styles.progressbarvalue}`}
          aria-label='progressbar'
        />
      </Progress.Root>
    </div>
  );
};

export default Progressbar;
