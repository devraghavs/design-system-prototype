import React from 'react';
import Styles from './Filecard.module.css';
import Button from '../Buttons/Button';
import Progressbar from '../Progressbar';

export type FilecardProps = {
  dataTestId?: string;
  fileName?: string;
  fileSize?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'existing' | 'uploading' | 'uploaded' | 'failed';
  className?: string;
  value?: number;
  max?: number;
  color?: string;
  esistingButtonColor?: string;
  uploadingButtonColor?: string;
  uploadedButtonColor?: string;
  failedButtonColor?: string;
  retryButtonClickHandler?: (e: React.MouseEvent) => void;
};

const Filecard = (props: FilecardProps) => {
  const {
    dataTestId = 'xt-ui-kit-filecard-component',
    fileName = '',
    fileSize = '',
    variant = 'existing',
    value = 0,
    max = 100,
    onClick,
    retryButtonClickHandler,
    className = '',
    esistingButtonColor = '#FE414D',
    uploadingButtonColor = '#FE414D',
    uploadedButtonColor = '#219653',
    failedButtonColor = '#FF9B53',
  } = props;
  return (
    <div data-testid={dataTestId} className={`${Styles.filecardcontainer} ${className}`}>
      <div className={Styles.filedetails}>
        <span className={Styles.filename}>{fileName}</span>
        <span className={Styles.filesize}>{fileSize}</span>
        {variant === 'uploading' ? (
          <span className={Styles.progressbarcontainer}>
            <Progressbar className={Styles.progressbar} value={value} max={max} />
            {`${value} %`}
          </span>
        ) : (
          ''
        )}
      </div>
      <div className={Styles.filebuttoncontainer}>
        {variant === 'existing' ? (
          <Button
            onClick={onClick}
            className={Styles.filebutton}
            variant='iconbutton'
            icon='DOWNLOAD'
            iconSize='25'
            iconcolor={esistingButtonColor}
            ariaLabel='existing button'
          />
        ) : (
          ''
        )}
        {variant === 'uploading' ? (
          <Button
            onClick={onClick}
            className={Styles.filebutton}
            variant='iconbutton'
            icon='CIRCLE'
            iconSize='25'
            iconcolor={uploadingButtonColor}
            ariaLabel='uploading button'
          />
        ) : (
          ''
        )}
        {variant === 'uploaded' ? (
          <Button
            onClick={onClick}
            className={Styles.filebutton}
            variant='iconbutton'
            icon='SUCCESS'
            iconSize='25'
            iconcolor={uploadedButtonColor}
            ariaLabel='uploaded button'
          />
        ) : (
          ''
        )}
        {variant === 'failed' ? (
          <span className={Styles.retrybuttoncontainer}>
            <Button
              onClick={onClick}
              className={Styles.filebutton}
              variant='iconbutton'
              icon='ALERT'
              iconSize='25'
              iconcolor={failedButtonColor}
              ariaLabel='failed button'
            />
            <Button
              onClick={retryButtonClickHandler}
              className={Styles.retrylink}
              variant='link'
              ariaLabel='retry button'
              iconSize='25'
            >
              Retry!
            </Button>
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Filecard;
