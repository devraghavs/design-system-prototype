import React from 'react';
import Label from '../Label';
import Styles from './Textarea.module.css';

type TextareaProps = {
  name?: string;
  className?: string;
  wrapperClassName?: string;
  id?: string;
  placeholder?: string;
  minLength?: number;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  cols?: number;
  dataTestId?: string;
  resizable?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  arialabel?: string;
};

const Textarea = (props: TextareaProps) => {
  const {
    name = 'textareaName',
    className = '',
    wrapperClassName = '',
    id = 'textareaId',
    placeholder = 'placeholder',
    minLength,
    label = '',
    required,
    disabled = false,
    rows,
    cols,
    dataTestId = 'xt-ui-kit-textarea-component',
    onChange,
    arialabel = 'enter text here',
    resizable = false,
  } = props;
  return (
    <div className={`${Styles.textarea} ${wrapperClassName}`}>
      <Label required={required} htmlFor={name} value={label ? `${label}` : ''} />
      <textarea
        aria-label={arialabel}
        data-testid={dataTestId}
        rows={rows}
        cols={cols}
        className={`${Styles.default} ${resizable ? Styles.resizeable : ''} ${className}`}
        name={name}
        id={id}
        minLength={minLength}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
