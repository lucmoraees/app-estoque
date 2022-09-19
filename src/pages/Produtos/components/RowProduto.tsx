import { ReactElement } from 'react';
import moment from 'moment';
import { IProduto } from '../../../@types';
import { maskMoney } from '../../../utils';

interface IProps {
  index: number;
  produto: IProduto;
}

const RowProduto = ({
  produto,
  index,
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
      <td>{produto.tipoEmbalagem}</td>
      <td>{produto.quantidadeEmbalagem}</td>
      <td>{moment(produto.createdAt).format('DD/MM/YYYY H:mm:ss')}</td>
      <td>{moment(produto.updatedAt).format('DD/MM/YYYY H:mm:ss')}</td>
    </tr>
  );
};

export default RowProduto;
