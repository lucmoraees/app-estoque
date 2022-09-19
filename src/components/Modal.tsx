/* eslint-disable no-unused-vars */
import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { Anchor } from '.';

interface IProps {
  children: ReactNode;
  visible: boolean,
  handleVisible: (x: boolean) => void;
  title?: string;
  footer?: ReactNode;
  modalSm?: boolean;
  modalMd?: boolean;
  modalLg?: boolean;
  width?: string;
}

const Modal = ({
  children,
  footer,
  title,
  visible,
  handleVisible,
  modalSm,
  modalMd,
  modalLg,
  width,
}: IProps): ReactElement => (
  <div
    id="background-modal"
    className="modal fade show modal-background"
    tabIndex={-1}
    aria-modal="true"
    role="dialog"
    style={{ display: visible ? 'block' : 'none', paddingRight: 15, overflow: 'auto' }}
  >
    <div
      className={classNames([
        'modal-dialog',
        modalSm && 'modal-sm',
        modalMd && 'modal-md',
        modalLg && 'modal-lg',
      ])}
      style={{ maxWidth: width ? 'fit-content' : '' }}
      role="document"
    >
      <div className="modal-content" style={{ width: width || '' }}>
        {title ? (
          <div id="modal-header" className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <Anchor onClick={() => handleVisible(false)} className="close" data-dismiss="modal" aria-label="Close">
              <em className="icon ni ni-cross" />
            </Anchor>
          </div>
        ) : (
          <div
            style={{
              borderBottom: 'none',
              position: 'absolute',
              right: 10,
              top: 10,
              zIndex: 9999,
            }}
          >
            <Anchor onClick={() => handleVisible(false)} className="close" data-dismiss="modal" aria-label="Close">
              <em className="icon ni ni-cross" />
            </Anchor>
          </div>
        )}
        <div className="modal-body">
          {children}
        </div>
        {footer ? (
          <div className="modal-footer">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default Modal;

Modal.defaultProps = {
  title: '',
  footer: null,
  modalSm: false,
  modalMd: false,
  modalLg: false,
  width: false,
};
