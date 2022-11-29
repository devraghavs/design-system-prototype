import { useEffect, useRef, MutableRefObject } from 'react';
import Styles from './Checkbox.module.css';
const CHECKBOX_STATES = {
  Checked: 1,
  Indeterminate: 2,
  Empty: 0,
};
type CheckboxProps = {
  label?: string;
  value: number;
  onChange: () => void;
  className: string;
  disabled?: boolean;
  dataTestId?: string;
  ariaLabel?: string;
};
const Checkbox = (props: CheckboxProps) => {
  const {
    label,
    value,
    onChange,
    className,
    disabled = false,
    dataTestId = 'xt-ui-kit-checkbox-component',
    ariaLabel = '',
  } = props;
  const checkboxRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (value === CHECKBOX_STATES.Checked) {
      checkboxRef.current.checked = true;
      checkboxRef.current.indeterminate = false;
    } else if (value === CHECKBOX_STATES.Empty) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = false;
    } else if (value === CHECKBOX_STATES.Indeterminate) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = true;
    }
  }, [value]);

  return (
    <div className={Styles.parentcheckbox}>
      <label className={Styles.checkboxlabel}>
        <input
          ref={checkboxRef}
          type='checkbox'
          onChange={onChange}
          className={className}
          disabled={disabled}
          data-testid={dataTestId}
          aria-label={ariaLabel}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
