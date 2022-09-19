/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import SweetAlerts, { SweetAlertResult } from 'sweetalert2';

const swal = SweetAlerts.mixin({
  confirmButtonColor: '#af5bf1',
  cancelButtonText: 'Cancelar',
  reverseButtons: true,
});

const success = (timer = 5000) => swal.mixin({
  icon: 'success',
  toast: true,
  timer,
  showConfirmButton: false,
  position: 'top-end',
});

const error = (timer = 5000) => swal.mixin({
  icon: 'error',
  toast: true,
  timer,
  showConfirmButton: false,
  position: 'top-end',
});

const warn = (timer = 5000) => swal.mixin({
  icon: 'warning',
  toast: true,
  timer,
  showConfirmButton: false,
  position: 'top-end',
});

export const exibirToastSuccess = (
  mensagem: string,
  timer?: number,
): Promise<SweetAlertResult> => success(timer).fire(mensagem);

export const exibirToastWarning = (
  mensagem: string,
  timer?: number,
): Promise<SweetAlertResult> => warn(timer).fire(mensagem);

export const exibirToastError = (
  mensagem: string,
  timer?: number,
): Promise<SweetAlertResult> => error(timer).fire(mensagem);
