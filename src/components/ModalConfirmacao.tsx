/* eslint-disable no-unused-vars */
import { FormEvent, ReactElement } from 'react';
import {
  Button,
  Modal,
} from '.';

interface IProps {
  visible: boolean;
  closeModal: () => void;
  onSubmit: () => void;
  title: string;
  text: string;
}

const ModalConfirmacao = ({
  visible,
  closeModal,
  onSubmit,
  title,
  text,
}: IProps): ReactElement => {
  const preventDefautlForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Modal
      modalSm
      visible={visible}
      closeModal={closeModal}
    >
      <form onSubmit={preventDefautlForm} className="d-flex flex-column justify-content-between aign-items-center gap-20">
        <div className="nk-modal d-flex flex-column align-items-center">
          <i className="nk-modal-icon icon icon-circle icon-circle-xxl fa-solid fa-question bg-light d-flex" />
          <h4 className="nk-modal-title text-center fs-22px" style={{ marginBottom: 4 }}>
            {title}
          </h4>
          <div className="nk-modal-text text-center">
            <p className="text-soft fs-14px">
              {text}
            </p>
          </div>
        </div>
        <div className="d-flex flex-row gap-10">
          <Button
            onClick={closeModal}
            className="btn btn-light w-50 justify-content-center"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="btn btn-blue w-50 justify-content-center"
          >
            Confirmar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalConfirmacao;
