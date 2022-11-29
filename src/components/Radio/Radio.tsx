import { ChangeEvent } from 'react';
import Label from '../Label';
import Styles from './Radio.module.css';
type RadioProps = {
  label: string;
  name?: string;
  id: string;
  value?: string;
  onCheckHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
  className?: string;
  dataTestId?: string;
  disable?: boolean;
};
const Radio = (props: RadioProps) => {
  const {
    name,
    className = '',
    value,
    id,
    label,
    onCheckHandler,
    ariaLabel = 'radiobutton',
    dataTestId = 'xt-ui-kit-Radio-component',
    disable = false,
  } = props;
  return (
    <div className={Styles.radioparent} data-testid={dataTestId}>
      <input
        type='radio'
        name={name}
        value={value}
        id={id}
        className={`${Styles.Inputradio} ${className}`}
        onChange={onCheckHandler}
        aria-label={ariaLabel}
        disabled={disable}
      />
      <Label htmlFor={id} className={`${Styles.labelradio} ${className}`} value={label} />
    </div>
  );
};
export default Radio;
