/* eslint-disable max-len */
import {
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { IChangeOrder, IFilters, IProduto } from '../../@types';
import api from '../../api';
import {
  Card,
  CardTitle,
  Container,
  Filters,
  ModalConfirmacao,
  Pagination,
  Table,
  TableEmpty,
  TableFooter,
  TableLoading,
  Th,
} from '../../components';
import { exibirToastErrorCatch, exibirToastSuccess } from '../../utils';
import ButtonAdicionarProduto from './components/ButtonAdicionarProduto';
import ModalFormularioProduto from './components/ModalFormularioProduto';
import RowProduto from './components/RowProduto';

const Produtos = (): ReactElement => {
  const [showModalDeletarProduto, setShowModalDeletarProduto] = useState<boolean>(false);
  const [showModalFormulario, setShowModalFormulario] = useState<boolean>(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<IProduto | undefined>(undefined);
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<IFilters>({
    column: 'descricao',
    value: undefined,
    columnToOrder: 'codigo',
    operacao: 'contendo',
    order: 'ASC',
    pagina: 1,
    quantidade: 10,
  });

  const buscarProdutos = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await api.getProdutos(filters);

      setProdutos(data.data);
      setTotalPaginas(data.totalPaginas);
    } catch (error) {
      exibirToastErrorCatch(error);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  const onChangeFilters = (column: string | undefined, value: string | undefined) => {
    setFilters({
      ...filters, column, value, pagina: 1,
    });
  };

  const onChangeFilterQuantidade = (quantidade: number) => {
    setFilters({ ...filters, quantidade, pagina: 1 });
  };

  const onChangeOrder = (object: IChangeOrder) => {
    setFilters({ ...filters, ...object });
  };

  const onChangePagina = (pagina: number) => {
    setFilters({ ...filters, pagina });
  };

  const closeModalModalFormulario = () => {
    setProdutoSelecionado(undefined);
    setShowModalFormulario(false);
  };

  const handleEditarProduto = (p: IProduto) => {
    setProdutoSelecionado(p);
    setShowModalFormulario(true);
  };

  const deletarProduto = async () => {
    try {
      if (!produtoSelecionado) return;

      await api.deletarProduto(produtoSelecionado.codigo);

      await buscarProdutos();

      exibirToastSuccess('Produto deletado!');

      setShowModalDeletarProduto(false);
    } catch (error) {
      exibirToastErrorCatch(error, 'Algo deu errado ao tentar deletar o produto!');
    }
  };

  const handleExcluirProduto = (p: IProduto) => {
    setProdutoSelecionado(p);
    setShowModalDeletarProduto(true);
  };

  useEffect(() => {
    buscarProdutos();
  }, [buscarProdutos]);

  return (
    <>
      <ModalConfirmacao
        closeModal={() => setShowModalDeletarProduto(false)}
        onSubmit={deletarProduto}
        text="Ao confirmar você excluirá o produto de forma permanente"
        title={`Deseja excluir o produto ${produtoSelecionado?.descricao}?`}
        visible={showModalDeletarProduto}
      />
      <ModalFormularioProduto
        produto={produtoSelecionado}
        buscarProdutos={buscarProdutos}
        visible={showModalFormulario}
        closeModal={closeModalModalFormulario}
      />
      <Container>
        <Card>
          <CardTitle
            title="Produtos"
            button={<ButtonAdicionarProduto showModalFormulario={() => setShowModalFormulario(true)} />}
          />
          <div className="card-inner-group d-flex flex-column flex-1">
            <div className="d-flex flex-row gap-10 justify-content-center">
              <Filters
                columnFilter={filters.column}
                valueFilter={filters.value}
                onChangeFilters={onChangeFilters}
                onChangeQuantidade={onChangeFilterQuantidade}
                columns={[
                  {
                    name: 'Código',
                    value: 'id',
                  },
                  {
                    name: 'Descrição',
                    value: 'descricao',
                  },
                  {
                    name: 'Preço',
                    value: 'preco',
                  },
                  {
                    name: 'Peso (gramas)',
                    value: 'peso',
                  },
                  {
                    name: 'Embalagem',
                    value: 'tipo_embalagem',
                  },
                  {
                    name: 'Quantidade',
                    value: 'quantidade_embalagem',
                  },
                ]}
              />
            </div>
            <Table>
              <thead>
                <tr role="row">
                  <Th
                    column="Código"
                    columnValue="codigo"
                    changeOrder={onChangeOrder}
                    columnToOrder={filters.columnToOrder}
                    order={filters.order}
                  />
                  <Th
                    column="Descrição"
                    columnValue="descricao"
                    changeOrder={onChangeOrder}
                    columnToOrder={filters.columnToOrder}
                    order={filters.order}
                  />
                  <Th
                    column="Preço"
                    columnValue="preco"
                    changeOrder={onChangeOrder}
                    columnToOrder={filters.columnToOrder}
                    order={filters.order}
                  />
                  <Th
                    column="Peso"
                    columnValue="peso"
                    changeOrder={onChangeOrder}
                    columnToOrder={filters.columnToOrder}
                    order={filters.order}
                  />
                  <Th
                    column="Embalagem"
                    columnValue="tipo_embalagem"
                    changeOrder={onChangeOrder}
                    columnToOrder={filters.columnToOrder}
                    order={filters.order}
                  />
                  <Th
                    column="Quantidade"
                    columnValue="quantidade_embalagem"
                    changeOrder={onChangeOrder}
                    columnToOrder={filters.columnToOrder}
                    order={filters.order}
                  />
                  <Th
                    column="Cadastro"
                    columnValue="created_at"
                    changeOrder={onChangeOrder}
                    columnToOrder={filters.columnToOrder}
                    order={filters.order}
                  />
                  <Th
                    column="Ùltima alteração"
                    columnValue="updated_at"
                    changeOrder={onChangeOrder}
                    columnToOrder={filters.columnToOrder}
                    order={filters.order}
                  />
                  <Th column="" />
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <TableLoading colSpan={8} />
                ) : null}
                {!isLoading && !produtos.length ? (
                  <TableEmpty colSpan={8} text="Não há produtos a serem exibidas!" />
                ) : null}
                {!isLoading && produtos.length ? (
                  <>
                    {produtos.map((produto, index) => (
                      <RowProduto
                        index={index}
                        produto={produto}
                        handleEditarProduto={handleEditarProduto}
                        handleExcluirProduto={handleExcluirProduto}
                      />
                    ))}
                  </>
                ) : null}
              </tbody>
            </Table>
            <TableFooter>
              <Pagination
                pagina={filters.pagina}
                totalPaginas={totalPaginas}
                onChangePagina={onChangePagina}
              />
            </TableFooter>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Produtos;
