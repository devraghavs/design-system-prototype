import { MouseEvent } from 'react';
import Button from '../Buttons';
import Styles from './NextandPrevious.module.css';

type NextandPreviousButtonProps = {
  disabled?: boolean;
  icon?: string;
  Iconcolor?: string;
  dataTestId?: string;
  size?: string;
  className?: string;
  onClick?: (e: MouseEvent) => void;
};
const NextandPreviousButton = (props: NextandPreviousButtonProps) => {
  const {
    icon = 'left',
    Iconcolor,
    dataTestId = 'xt-ui-kit-nextandprevious-component',
    size = '11',
    disabled = false,
    className = '',
    onClick,
  } = props;
  return (
    <>
      <Button
        dataTestId={dataTestId}
        variant='iconbutton'
        disabled={disabled}
        icon={icon}
        iconcolor={Iconcolor}
        ariaLabel='page buttons'
        onClick={onClick}
        className={`${Styles.button} ${Styles.classNamenextandprevious} ${className}`}
        iconSize={size}
        isSpaceRequired={false}
      />
    </>
  );
};
export default NextandPreviousButton;
