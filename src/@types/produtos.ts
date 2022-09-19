export interface IProduto {
  codigo: number;
  descricao: string;
  preco: number;
  tipoEmbalagem: number;
  quantidadeEmbalagem: number;
  peso: number;
  updatedAt: Date;
  createdAt: Date;
}

export interface IResponseProdutos{
  data: IProduto[];
  totalPaginas: number;
  totalRegistros: number;
}

export interface IParamsCreateProduto {
  descricao: string;
  preco: number;
  tipoEmbalagem: number;
  quantidadeEmbalagem: number;
  peso: number;
}
