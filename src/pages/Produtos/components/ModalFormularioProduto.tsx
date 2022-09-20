import {
  ChangeEvent,
  FormEvent, useCallback, useEffect, useState,
} from 'react';
import { IProduto } from '../../../@types';
import api from '../../../api';
import { Button, Modal, SelectTipoEmbalagem } from '../../../components';
import InputMaskMoney from '../../../components/InputMaskMoney';
import { exibirToastErrorCatch, exibirToastSuccess, maskMoney } from '../../../utils';
import correctValueVanilla from '../../../utils/correct-value-vanilla';

interface IParams {
  produto: IProduto | undefined;
  visible: boolean;
  closeModal: () => void;
  buscarProdutos: () => Promise<void>;
}

const ModalFormularioProduto = ({
  produto,
  visible,
  closeModal,
  buscarProdutos,
}: IParams) => {
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

  const cadastrarProduto = async () => {
    try {
      const params = {
        descricao, preco, tipoEmbalagem, quantidadeEmbalagem, peso,
      };

      await api.cadastrarProduto(params);

      exibirToastSuccess('Produto cadastrado com sucesso!');

      limparInputs();

      await buscarProdutos();
    } catch (error) {
      exibirToastErrorCatch(error);
    }
  };

  const editarProduto = async () => {
    try {
      if (!produto) return;

      const params = {
        descricao, preco, tipoEmbalagem, quantidadeEmbalagem, peso,
      };

      await api.editarProduto(produto.codigo, params);

      exibirToastSuccess('Produto editado com sucesso!');

      limparInputs();

      await buscarProdutos();

      closeModal();
    } catch (error) {
      exibirToastErrorCatch(error);
    }
  };

  const handleOperacaoProduto = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!produto) {
      cadastrarProduto();
      return;
    }

    editarProduto();
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

  const handleInitialValues = useCallback(() => {
    if (!produto) {
      limparInputs();
      return;
    }

    setDescricao(produto.descricao);
    setPreco(produto.preco);
    setPeso(produto.peso);
    setTipoEmbalagem(produto.tipoEmbalagem);
    setQuantidadeEmbalagem(produto.quantidadeEmbalagem);
  }, [produto]);

  useEffect(() => {
    handleInitialValues();
  }, [handleInitialValues]);

  return (
    <Modal
      modalMd
      visible={visible}
      closeModal={closeModal}
      title={produto ? 'Editar produto' : 'Cadastrar produto'}
    >
      <div className="card-inner-group d-flex flex-column flex-1 h-100 justify-content-between">
        <form onSubmit={handleOperacaoProduto} className=" flex-column flex-1 gap-20 h-100 d-flex">
          <div className=" flex-column flex-1 gap-30 h-100 d-flex">
            {produto ? (
              <div className="d-flex flex-column">
                <span className="fs-14px">Código</span>
                <span style={{ backgroundColor: '#f5f6fa' }} className="form-control form-control-lg">
                  {produto?.codigo}
                </span>
              </div>
            ) : null}
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
              <InputMaskMoney
                id="input-preco-produto"
                className="form-control form-control-lg"
                placeholder="Informe o preço do produto"
                value={maskMoney(preco || '')}
                onInput={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = correctValueVanilla(e.target.value);
                  onChangePreco(Number(value));
                }}
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
            {produto ? (
              <Button
                onClick={closeModal}
                className="btn btn-light flex-1 justify-content-center"
              >
                Cancelar
              </Button>
            ) : (
              <Button
                onClick={limparInputs}
                className="btn btn-light flex-1 justify-content-center"
              >
                Limpar
              </Button>
            )}
            <Button
              type="submit"
              className="btn btn-blue flex-1 justify-content-center"
            >
              {produto ? 'Salvar alterações' : 'Cadastrar'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalFormularioProduto;
