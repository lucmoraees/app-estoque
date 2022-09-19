/* eslint-disable no-unused-vars */
import { ReactElement } from 'react';
import moment from 'moment';
import { IProduto } from '../../../@types';
import { maskMoney, traducaoTipoEmbalagem } from '../../../utils';
import { Button } from '../../../components';

interface IProps {
  index: number;
  produto: IProduto;
  handleEditarProduto: (p: IProduto) => void;
  handleExcluirProduto: (p: IProduto) => void;
}

const RowProduto = ({
  produto,
  index,
  handleEditarProduto,
  handleExcluirProduto,
}: IProps): ReactElement => {
  const isRowPar = index % 2 === 0;

  return (
    <tr
      id={`row-${index}`}
      className={`row-focus align-items-center pointer custom-tr custom-tr-${isRowPar ? 'par' : 'impar'}`}
    >
      <td>{produto.codigo}</td>
      <td>{produto.descricao}</td>
      <td>{maskMoney(produto.preco)}</td>
      <td>{produto.peso}</td>
      <td>{traducaoTipoEmbalagem(produto.tipoEmbalagem)}</td>
      <td>{produto.quantidadeEmbalagem}</td>
      <td>{moment(produto.createdAt).format('DD/MM/YYYY H:mm:ss')}</td>
      <td>{moment(produto.updatedAt).format('DD/MM/YYYY H:mm:ss')}</td>
      <td className="text-end">
        <Button
          onClick={() => handleEditarProduto(produto)}
          className="btn btn-sm btn-green"
          style={{ height: 20, marginInline: 2, padding: 8 }}
        >
          Editar
        </Button>
        <Button
          onClick={() => handleExcluirProduto(produto)}
          className="btn btn-sm btn-red"
          style={{ height: 20, marginInline: 2, padding: 8 }}
        >
          Excluir
        </Button>
      </td>
    </tr>
  );
};

export default RowProduto;
