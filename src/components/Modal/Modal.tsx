import { Dialog } from '@headlessui/react';
import Button from '../Buttons';
import Iconography from '../Iconography';
import { Icons } from '../Iconography/iconsEnum';
import Styles from './Modal.module.css';

type ModalProps = {
  ModalTitle?: JSX.Element | JSX.Element[] | string;
  ModalContent?: JSX.Element | JSX.Element[] | string;
  className?: string;
  themedheading?: boolean;
  Iconmodal?: boolean;
  icon?: string;
  iconcolor?: string;
  size?: string;
  dataTestId?: string;
  open?: boolean;
  crossIcon?: boolean;
  largeModal?: boolean;
  onClose?: () => void;
};
const Modal = (props: ModalProps) => {
  const {
    ModalTitle,
    ModalContent,
    className = '',
    themedheading = false,
    Iconmodal = false,
    icon,
    iconcolor,
    size = '80',
    crossIcon = false,
    open = false,
    largeModal = false,
    onClose,

    dataTestId = 'xt-ui-kit-modal-component',
  } = props;
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div data-testid={dataTestId}>
      <Dialog
        open={open}
        onClose={handleClose}
        className={
          largeModal
            ? `${Styles.modalContainerlarge} ${className}`
            : `${Styles.modalContainer} ${className}`
        }
      >
        {Iconmodal ? (
          <Dialog.Panel className={`${Styles.modal_iconmodal} ${className} ${Styles.icon_modal}`}>
            <div className={Styles.modal_parent}>
              <div className={Styles.parentIcon}>
                <div className={Styles.icon}>
                  {icon && (
                    <Iconography
                      icon={icon}
                      size={size}
                      color={iconcolor}
                      className={Styles.icon_in_modal}
                    />
                  )}
                </div>
              </div>
              <div className={Styles.descriptionParent}>
                <Dialog.Description
                  className={`${Styles.modal_content_iconmodal} ${Styles.modal_content_icon}`}
                >
                  <div className={Styles.crossParent}>
                    {crossIcon ? (
                      <Button
                        dataTestId='handleclosebtn'
                        variant='iconbutton'
                        icon={Icons.cross}
                        size='small'
                        iconcolor='black'
                        iconSize='11'
                        onClick={handleClose}
                      />
                    ) : null}
                  </div>
                  <div className={Styles.modal_child_content}>{ModalContent}</div>
                </Dialog.Description>
              </div>
            </div>
          </Dialog.Panel>
        ) : (
          <Dialog.Panel
            className={
              largeModal
                ? `${Styles.largemodal} ${className}`
                : `${Styles.modal} ${className} ${Styles.overflowmodal}`
            }
          >
            <div className={Styles.modal_header}>
              <Dialog.Title
                className={
                  themedheading
                    ? `${Styles.modal_header_title} ${Styles.modal_header_simple} ${Styles.modal_header_theme}`
                    : `${Styles.modal_header_title} ${Styles.modal_header_simple}`
                }
              >
                {ModalTitle}
                {crossIcon ? (
                  <Button
                    variant='iconbutton'
                    size='small'
                    icon={Icons.cross}
                    iconcolor={themedheading ? 'white' : 'black'}
                    iconSize='11'
                    className={Styles.close}
                    onClick={handleClose}
                  />
                ) : null}
              </Dialog.Title>
            </div>
            <div className={`${Styles.modal_contentNormal}`}>
              <Dialog.Description>{ModalContent}</Dialog.Description>
            </div>
          </Dialog.Panel>
        )}
      </Dialog>
    </div>
  );
};
export default Modal;
