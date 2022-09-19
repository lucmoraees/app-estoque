import Swal, { SweetAlertResult } from 'sweetalert2';
import { get } from 'lodash';
import { IErrorCatch } from '../@types';

const errorCatch = Swal.mixin({
  icon: 'error',
  toast: true,
  timer: 5000,
  showConfirmButton: false,
  position: 'top-end',
  confirmButtonColor: '#af5bf1',
  cancelButtonText: 'Cancelar',
  reverseButtons: true,
});

const exibirToastErrorCatch = (
  e: unknown,
  message = 'Algo deu errado, tente novamente mais tarde',
): Promise<SweetAlertResult> => {
  const err = e as IErrorCatch;

  if (err?.response && err.response.data.validation) {
    return errorCatch.fire(get(
      err,
      'response.data.validation.body.message',
      message,
    ));
  }

  return errorCatch.fire(get(
    err,
    'response.data.message',
    message,
  ));
};

export default exibirToastErrorCatch;
