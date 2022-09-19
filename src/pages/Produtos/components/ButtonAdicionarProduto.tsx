import { ReactElement } from 'react';
import { Button } from '../../../components';

interface IParams {
  showModalFormulario: () => void;
}

const ButtonAdicionarProduto = ({ showModalFormulario }: IParams): ReactElement => (
  <Button
    onClick={showModalFormulario}
    className="btn btn-blue"
  >
    Adicionar produto
  </Button>
);

export default ButtonAdicionarProduto;
