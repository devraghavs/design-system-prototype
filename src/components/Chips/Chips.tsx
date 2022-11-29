import React from 'react';
import Button from '../Buttons';
import Styles from './Chips.module.css';

type TopicPillsProps = {
  chipVariant: 'info' | 'danger' | 'success' | 'warning';
  className?: string;
  label?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onDelete?: (e: React.MouseEvent) => void;
  isRemoveable?: boolean;
  isSelected?: boolean;
  dataTestId?: string;
};

const Chips = (props: TopicPillsProps) => {
  const {
    chipVariant,
    className,
    label = 'Label',
    disabled = false,
    isRemoveable = true,
    onClick,
    onDelete,
    isSelected = false,
    dataTestId = 'xt-ui-kit-chip-component',
  } = props;
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(e);
    }
  };
  return isRemoveable ? (
    <div
      data-testid={dataTestId}
      className={`${Styles.default}
    ${isSelected ? Styles.selected : Styles.notSelected}
    ${Styles[chipVariant]} 
    ${disabled ? Styles.disabled : ''} ${className}`}
    >
      <Button onClick={onClick} className={Styles.withRemove}>
        {label}
      </Button>
      <Button
        size='small'
        dataTestId='deletebtn'
        onClick={handleDelete}
        variant='iconbutton'
        icon='circle'
        iconSize='14'
        disabled={disabled}
        className={`${Styles.removeicon}`}
      >
        <span className='screen-reader-only'>{`delete ${label || ''}`}</span>
      </Button>
    </div>
  ) : (
    <Button
      dataTestId={dataTestId}
      className={`${Styles.default} ${Styles.defaultPadding}
      ${isSelected ? Styles.selected : Styles.notSelected}
      ${Styles[chipVariant]} 
      ${disabled ? Styles.disabled : ''} ${className}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default Chips;
