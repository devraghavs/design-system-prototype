import { ChangeEvent, useRef, MutableRefObject } from 'react';
import Button from '../Buttons';
import Iconography from '../Iconography';
import Styles from './FileUpload.module.css';

type FileUploaderProps = {
  fileuploadcontainer?: string;
  fileattachmentlabelclassName?: string;
  fileattachmenticonclassName?: string;
  fileuploadinputclassName?: string;
  errorclassName?: string;
  label?: string;
  fileType?: string;
  fileSizeLargeError?: string;
  fileSizeZeroError?: string;
  dataTestId?: string;
  onClickbuttondatatestId?: string;
  onChange?: (e: ChangeEvent) => void;
  error?: string;
  linkIconColor?: string;
};

const FileUploader = (props: FileUploaderProps) => {
  const {
    dataTestId = 'xt-ui-kit-FileUpload-component',
    fileType = '',
    label = 'Attach File.',
    fileattachmentlabelclassName = '',
    fileattachmenticonclassName = '',
    fileuploadinputclassName = '',
    fileuploadcontainer = '',
    errorclassName = '',
    onChange,
    error = '',
    linkIconColor = '#079fff',
  } = props;

  const hiddenFileInput = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div
      data-testid={dataTestId}
      className={`${Styles.fileuploadcontainerdefault} ${fileuploadcontainer}`}
    >
      <Button
        dataTestId='btntestid'
        variant='link'
        className={`${Styles.fileattachment} ${fileattachmentlabelclassName}`}
        onClick={handleClick}
      >
        <Iconography
          className={`${Styles.attachmenticon} ${fileattachmenticonclassName}`}
          icon='attachments'
          color={linkIconColor}
        />
        <span className={Styles.attachmenticonlabel}>{label}</span>
      </Button>

      <input
        className={`${Styles.inputdefault} ${fileuploadinputclassName}`}
        data-testid='inputdataid'
        type='file'
        accept={fileType}
        ref={hiddenFileInput}
        onChange={onChange}
        aria-label='file upload'
      />
      {error ? <div className={`${Styles.errorclass} ${errorclassName}`}>{error}</div> : ''}
    </div>
  );
};
export default FileUploader;
