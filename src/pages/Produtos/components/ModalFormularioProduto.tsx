/* eslint-disable no-unused-vars */
import { FormEvent, useState } from 'react';
import api from '../../../api';
import { Button, Modal, SelectTipoEmbalagem } from '../../../components';
import { exibirToastErrorCatch, exibirToastSuccess } from '../../../utils';

interface IParams {
  visible: boolean;
  handleVisible: (x: boolean) => void;
}

const ModalFormularioProduto = ({ visible, handleVisible }: IParams) => {
  const [descricao, setDescricao] = useState<string>('');
  const [preco, setPreco] = useState<number>(0);
  const [tipoEmbalagem, setTipoEmbalagem] = useState<number>(1);
  const [quantidadeEmbalagem, setQuantidadeEmbalagem] = useState<number>(1);
  const [peso, setPeso] = useState<number>(0);

  const limparInputs = () => {
    setDescricao('');
    setPreco(0);
    setPeso(0);
    setTipoEmbalagem(1);
    setQuantidadeEmbalagem(1);
  };

  const handleCriarProduto = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const params = {
        descricao, preco, tipoEmbalagem, quantidadeEmbalagem, peso,
      };

      await api.cadastrarProduto(params);

      exibirToastSuccess('Produto cadastrado com sucesso!');

      limparInputs();
    } catch (error) {
      exibirToastErrorCatch(error);
    }
  };

  const onChangeDescricao = (value: string) => {
    setDescricao(value);
  };

  const onChangePreco = (value: number) => {
    setPreco(value);
  };

  const onChangeTipoEmbalagem = (value: number) => {
    if (value === 1) {
      setTipoEmbalagem(1);
      setQuantidadeEmbalagem(1);
      return;
    }

    if (quantidadeEmbalagem === 1) {
      setQuantidadeEmbalagem(2);
    }

    setTipoEmbalagem(value);
  };

  const onChangeQuantidadeEmbalagem = (value: number) => {
    setQuantidadeEmbalagem(value);
  };

  const onChangePeso = (value: number) => {
    setPeso(value);
  };

  return (
    <Modal
      modalMd
      visible={visible}
      handleVisible={handleVisible}
      title="Cadastrar produto"
    >
      <div className="card-inner-group d-flex flex-column flex-1 h-100 justify-content-between">
        <form onSubmit={handleCriarProduto} className=" flex-column flex-1 gap-20 h-100 d-flex">
          <div className=" flex-column flex-1 gap-30 h-100 d-flex">
            <div className="d-flex flex-column">
              <span className="fs-14px">Descrição</span>
              <input
                className="form-control form-control-lg"
                placeholder="Informa a descrição do produto"
                value={descricao}
                onChange={(e) => onChangeDescricao(e.target.value)}
                required
              />
            </div>
            <div className="d-flex flex-column">
              <span className="fs-14px">Preço</span>
              <input
                className="form-control form-control-lg"
                placeholder="Informe o preço do produto"
                value={preco || ''}
                onChange={(e) => onChangePreco(Number(e.target.value))}
                required
              />
            </div>
            <div className="d-flex flex-column">
              <span className="fs-14px">Peso (gramas)</span>
              <input
                className="form-control form-control-lg"
                placeholder="informa o peso do produto em gramas"
                value={peso || ''}
                onChange={(e) => onChangePeso(Number(e.target.value))}
                required
                min={1}
                type="number"
              />
            </div>
            <div className="d-flex flex-column">
              <span className="fs-14px">Tipo da embalagem</span>
              <SelectTipoEmbalagem
                className="form-control form-control-lg"
                placeholder="Selecionar o tipo da embalagem"
                tipoEmbalagem={tipoEmbalagem}
                onChangeTipoEmbalagem={(value) => onChangeTipoEmbalagem(value)}
                required
              />
            </div>
            <div className="d-flex flex-column">
              <span className="fs-14px">Quantidade por embalagem</span>
              <input
                className="form-control form-control-lg"
                placeholder="Quantidade contida por embalagem"
                type="number"
                min={tipoEmbalagem === 1 ? 1 : 2}
                value={quantidadeEmbalagem || ''}
                onChange={(e) => onChangeQuantidadeEmbalagem(Number(e.target.value))}
                disabled={tipoEmbalagem === 1}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row gap-10">
            <Button
              onClick={limparInputs}
              className="btn btn-light flex-1 justify-content-center"
            >
              Limpar
            </Button>
            <Button
              type="submit"
              className="btn btn-blue flex-1 justify-content-center"
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalFormularioProduto;
