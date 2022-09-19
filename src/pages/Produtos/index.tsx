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
  Pagination,
  Table,
  TableEmpty,
  TableFooter,
  TableLoading,
  Th,
} from '../../components';
import { exibirToastErrorCatch } from '../../utils';
import ButtonAdicionarProduto from './components/ButtonAdicionarProduto';
import ModalFormularioProduto from './components/ModalFormularioProduto';
import RowProduto from './components/RowProduto';

const Produtos = (): ReactElement => {
  const [showModalFormulario, setShowModalFormulario] = useState<boolean>(true);
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<IFilters>({
    column: undefined,
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

  const handleShowModalFormulario = (value: boolean) => {
    setShowModalFormulario(value);
  };

  useEffect(() => {
    buscarProdutos();
  }, [buscarProdutos]);

  return (
    <>
      <ModalFormularioProduto
        visible={showModalFormulario}
        handleVisible={handleShowModalFormulario}
      />
      <Container>
        <Card>
          <CardTitle
            title="Produtos"
            button={<ButtonAdicionarProduto showModalFormulario={() => handleShowModalFormulario(true)} />}
          />
          <div className="card-inner-group d-flex flex-column flex-1">
            <div className="d-flex flex-row gap-10 justify-content-center">
              <Filters
                onChangeFilters={onChangeFilters}
                onChangeQuantidade={onChangeFilterQuantidade}
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
                  />
                  <Th
                    column="Ùltima alteração"
                  />
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
