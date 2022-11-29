import { MouseEvent } from 'react';
import Iconography from '../Iconography/Iconography';
import Styles from './Button.module.css';

interface ButtonProps {
  children?: string | JSX.Element | JSX.Element[];
  variant?: 'solid' | 'hollow' | 'link' | 'iconbutton';
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
  size?: 'extrasmall' | 'small' | 'medium' | 'large' | 'optional';
  dataTestId?: string;
  type?: 'button' | 'submit' | 'reset';
  iconcolor?: string;
  icon?: string;
  className?: string;
  iconSize?: string;
  ariaLabel?: string;
  isSpaceRequired?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    disabled = false,
    children,
    onClick,
    variant = 'solid',
    size = 'medium',
    dataTestId = 'xt-ui-kit-button-component',
    type = 'button',
    iconcolor = 'black',
    icon = '',
    className = '',
    iconSize = '11',
    ariaLabel = '',
    isSpaceRequired = false,
  } = props;
  return children || icon ? (
    <button
      type={type}
      data-testid={dataTestId}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${Styles[size]} ${Styles[variant]} ${className}`}
    >
      {icon && (
        <Iconography
          icon={icon}
          className={isSpaceRequired ? Styles.btnicon : null}
          color={iconcolor}
          size={iconSize}
        />
      )}
      {children}
    </button>
  ) : null;
};
export default Button;
