import { useState } from 'react';
import Iconography from '../Iconography';
import { Icons } from '../Iconography/iconsEnum';
import styles from './DecisionRadio.module.css';

interface DecisionRadioProps {
  positiveText: string;
  negativeText: string;
  positiveValue?: string | number;
  negativeValue?: string | number;
  disablePositive?: boolean;
  disableNegative?: boolean;
}

const DecisionRadio = (props: DecisionRadioProps) => {
  const [isCheck, setIsCheck] = useState(false);
  const onHandleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setIsCheck((prevState) => !prevState);
    console.log(e.target.checked);
  };

  const {
    positiveText,
    negativeText,
    positiveValue = 'true',
    negativeValue = 'false',
    disablePositive = false,
    disableNegative = false,
  } = props;
  return (
    <div className={styles.mainDiv}>
      <input
        type='radio'
        className={`${styles.btnCheck}`}
        name='options-outlined'
        id='success-outlined'
        value={positiveValue}
        checked={disablePositive ? false : !isCheck}
        disabled={disablePositive}
        onChange={(e) => onHandleChange(e)}
      />
      <label
        className={`${styles.btn} ${styles['outline-success']} ${
          disablePositive ? styles['btnDisable'] : null
        }`}
        htmlFor='success-outlined'
      >
        <>
          {(isCheck == true || disablePositive) && (
            <Iconography
              className={`${styles.icon} ${styles['icon-positive-outline']}`}
              icon={Icons.tick}
              color={'green'}
              size='25'
            />
          )}
          {isCheck == false && !disablePositive && (
            <Iconography
              className={`${styles.icon} ${styles['icon-solid-positive']}`}
              icon={Icons.tick}
              color={'white'}
              size='25'
            />
          )}
          {positiveText}
        </>
      </label>
      <span> </span>
      <input
        type='radio'
        className={styles.btnCheck}
        name='options-outlined'
        id='danger-outlined'
        value={negativeValue}
        checked={disableNegative ? false : isCheck}
        disabled={disableNegative}
        onChange={(e) => onHandleChange(e)}
      />
      <label
        className={`${styles.btn} ${styles['outline-danger']} ${
          disableNegative ? styles['btnDisable'] : null
        }`}
        htmlFor='danger-outlined'
      >
        <>
          {(!isCheck == true || disableNegative) && (
            <Iconography
              className={`${styles.icon} ${styles['icon-negative-outline']}`}
              icon={Icons.cross}
              color={'red'}
              size='25'
            />
          )}
          {!isCheck == false && !disableNegative && (
            <Iconography
              className={`${styles.icon} ${styles['icon-solid-negative']}`}
              icon={Icons.cross}
              color={'white'}
              size='25'
            />
          )}

          {negativeText}
        </>
      </label>
    </div>
  );
};

export default DecisionRadio;
