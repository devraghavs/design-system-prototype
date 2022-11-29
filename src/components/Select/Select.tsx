import { useState, useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import { Icons } from '../Iconography/iconsEnum';
import Iconography from '../Iconography';
import Styles from './select.module.css';

interface IselectProps {
  selectOptionsStyle?: string;
  selectButtonStyle?: string;
  data?: IselectOptionsProps[];
  multiple?: boolean;
  optional?: boolean;
  labelText?: string;
  dataTestId?: string;
  selectProp?: string;
  checkBoxColor?: string;
}

interface IselectOptionsProps {
  value?: string | number;
  label?: string;
  disabled?: boolean;
}

const Select = ({
  selectOptionsStyle,
  selectButtonStyle,
  selectProp = 'Select Option',
  data,
  multiple = false,
  labelText,
  optional = false,
  dataTestId = 'xt-ui-kit-select-component',
  checkBoxColor,
}: IselectProps) => {
  const updatedOptions = [
    {
      value: '',
      label: selectProp,
      disabled: false,
    },
    ...(data ?? []),
  ];

  const initialState = () => {
    let value = updatedOptions[0];
    if (data?.length === 1 && !optional) {
      value = updatedOptions[1];
    }
    if (data?.length === 1 && optional) {
      value;
    }
    if (multiple) {
      return [value];
    }
    return value;
  };

  const [selectOption, setSelectOption] = useState(() => initialState());

  const handleButtonSelect = (selectOption: IselectOptionsProps | IselectOptionsProps[]) => {
    if (multiple) {
      return (selectOption as IselectOptionsProps[])?.[0]?.label;
    } else {
      return (selectOption as IselectOptionsProps).label;
    }
  };

  useEffect(() => {
    setSelectOption(initialState());
  }, [multiple]);

  return (
    <div data-testid={dataTestId}>
      <Listbox value={selectOption} onChange={setSelectOption} multiple={multiple}>
        {labelText && <Listbox.Label className={Styles.LabelText}>{labelText}</Listbox.Label>}
        <Listbox.Button className={`${Styles.selectButton} ${selectButtonStyle}`}>
          {handleButtonSelect(selectOption)}
        </Listbox.Button>
        <Listbox.Options className={`${Styles.selectOptions} ${selectOptionsStyle}`}>
          {data?.map((option) => (
            <Listbox.Option
              className={option.disabled ? Styles.disableOption : ''}
              key={option.value ?? ''}
              value={option}
              disabled={option.disabled ?? false}
            >
              {({ selected }) => (
                <span className={selected ? Styles.selectedItem : Styles.unSelectedItem}>
                  <span className={Styles.checkIcon}>
                    {multiple ? (
                      <Iconography
                        color={checkBoxColor}
                        icon={selected ? Icons.checkboxChecked : Icons.checkboxUnchecked}
                      />
                    ) : null}
                  </span>
                  {option.label}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
export default Select;
