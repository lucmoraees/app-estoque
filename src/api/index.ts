import { AxiosPromise } from 'axios';
import {
  IResponseProdutos,
  IFilters,
  IParamsCreateProduto,
  IParamsUpdateProduto,
} from '../@types';
import xhr from './xhr';

const getProdutos = (params: IFilters): AxiosPromise<IResponseProdutos> => (
  xhr.get('/produtos', { params })
);

const cadastrarProduto = (params: IParamsCreateProduto): AxiosPromise<IResponseProdutos> => (
  xhr.post('/produtos', params)
);

const editarProduto = (
  codigoProduto: number,
  params: IParamsUpdateProduto,
): AxiosPromise<IResponseProdutos> => (
  xhr.put(`/produtos/${codigoProduto}`, params)
);

const deletarProduto = (codigoProduto: number): AxiosPromise<IResponseProdutos> => (
  xhr.delete(`/produtos/${codigoProduto}`)
);

export default {
  getProdutos,
  cadastrarProduto,
  editarProduto,
  deletarProduto,
};
