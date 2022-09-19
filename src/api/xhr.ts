/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestHeaders } from 'axios';
import { URL_API } from '../utils';

const getHeaders = (): AxiosRequestHeaders => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
});

const xhr = axios.create({
  baseURL: URL_API,
  headers: getHeaders(),
});

xhr.interceptors.response.use((response: any) => response, (error: any) => Promise.reject(error));

export default xhr;
