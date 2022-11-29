import { useEffect, useState } from 'react';
import Checkbox from './CheckboxConstant';
import Styles from './Checkbox.module.css';

const CHECKBOX_STATES = {
  Checked: 1,
  Indeterminate: 2,
  Empty: 0,
};
type CheckboxProps = {
  label?: string;
  disabled?: boolean;
  Checked?: boolean;
  Indeterminate?: boolean;
  onChange?: () => void;
  className?: string;
};
const CheckboxMain = (props: CheckboxProps) => {
  const { Checked = false, Indeterminate = false, className = '' } = props;
  const [checked, setChecked] = useState<number>(CHECKBOX_STATES.Empty);
  useEffect(() => {
    if (Checked) {
      setChecked(CHECKBOX_STATES.Checked);
    } else {
      setChecked(CHECKBOX_STATES.Empty);
    }
  }, [Checked]);
  useEffect(() => {
    if (Indeterminate) {
      setChecked(CHECKBOX_STATES.Indeterminate);
    } else {
      setChecked(CHECKBOX_STATES.Empty);
    }
  }, [Indeterminate]);

  const handleChange = () => {
    let updatedChecked = 0;
    if (Indeterminate) {
      if (checked === CHECKBOX_STATES.Checked) {
        updatedChecked = CHECKBOX_STATES.Empty;
      } else if (checked === CHECKBOX_STATES.Empty) {
        updatedChecked = CHECKBOX_STATES.Indeterminate;
      } else if (checked === CHECKBOX_STATES.Indeterminate) {
        updatedChecked = CHECKBOX_STATES.Checked;
      }
    } else {
      if (checked === CHECKBOX_STATES.Checked) {
        updatedChecked = CHECKBOX_STATES.Empty;
      } else {
        updatedChecked = CHECKBOX_STATES.Checked;
      }
    }

    setChecked(updatedChecked);
  };
  const onChange = () => {
    handleChange();
  };
  return Checkbox ? (
    <Checkbox
      disabled={props.disabled}
      label={props.label}
      value={checked}
      onChange={onChange}
      dataTestId={'xt-ui-kit-checkbox-component'}
      className={`${Styles.checkboxstyle} ${className}`}
      ariaLabel={'checkbox'}
    />
  ) : null;
};
export default CheckboxMain;
