import { AxiosPromise } from 'axios';
import {
  IResponseProdutos,
  IFilters,
  IParamsCreateProduto,
} from '../@types';
import xhr from './xhr';

const getProdutos = (params: IFilters): AxiosPromise<IResponseProdutos> => (
  xhr.get('/produtos', { params })
);

const cadastrarProduto = (params: IParamsCreateProduto): AxiosPromise<IResponseProdutos> => (
  xhr.post('/produtos', params)
);

export default {
  getProdutos,
  cadastrarProduto,
};
