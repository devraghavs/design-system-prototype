import Label from '../Label';
import Button from '../Buttons';
import Styles from './Input.module.css';
import React from 'react';

type InputProps = {
  wrapperClass?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  searchIcon?: boolean;
  className?: string;
  name?: string;
  type?: string;
  label?: string;
  id?: string;
  value?: string | number | string[] | undefined;
  dataTestId?: string;
  error?: string;
  arialabel?: string;
  defaultValue?: string | number;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const {
    wrapperClass = '',
    placeholder,
    required,
    disabled = false,
    type,
    className,
    name = 'inputname',
    label,
    dataTestId = 'xt-ui-kit-input-component',
    error = '',
    onChange,
    onClick,
    arialabel = 'enter input here',
    defaultValue = '',
    value,
    searchIcon = true,
    id = 'inputid',
  } = props;

  return (
    <div className={`${Styles.input} ${wrapperClass}`}>
      {label && <Label value={label} htmlFor={name} required={required} />}
      {type === 'search' && searchIcon ? (
        <div className={`${Styles.searchcontainer} ${error ? Styles.error : ''}`}>
          <input
            name={name}
            id={id}
            aria-label={arialabel}
            type='search'
            className={`${Styles.default} ${Styles.searchinputbox} 
            ${className} `}
            placeholder={placeholder || 'placeholder'}
            required={required || false}
            data-testid={dataTestId}
            disabled={disabled || false}
            defaultValue={defaultValue}
            onChange={onChange}
          />
          <div className={Styles.iconContainer}>
            <div className={Styles.separator}></div>
            <Button
              onClick={onClick}
              className={`${Styles.searchbutton}`}
              disabled={disabled}
              type='submit'
            >
              <span className='screen-reader-only'>search</span>
            </Button>
          </div>
        </div>
      ) : (
        <input
          name={name}
          id={id}
          type={type || 'text'}
          className={`${Styles.default} ${className} ${error ? Styles.error : ''}`}
          placeholder={placeholder || 'placeholder'}
          required={required || false}
          disabled={disabled || false}
          data-testid={dataTestId}
          onChange={onChange}
          value={value}
        />
      )}
      {error ? <div className={Styles.errormessage}>{error}</div> : ''}
    </div>
  );
};

export default Input;
