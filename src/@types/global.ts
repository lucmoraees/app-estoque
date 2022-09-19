import { ReactNode } from 'react';

export interface IChildren {
  children: ReactNode;
}

export type IErrorCatch = { [x: string]: any };

export interface IChangeOrder {
  columnToOrder: string;
  order: 'ASC' | 'DESC';
}

export type IQueryOperacao = 'contendo' | 'iniciando' | 'igual';

export interface IFilters {
  pagina: number;
  quantidade: number;
  columnToOrder: string;
  order: 'ASC' | 'DESC';
  column: string | undefined;
  value: string | undefined;
  operacao: IQueryOperacao;
}

export type IObjectGeneric = { [x: string]: any }
