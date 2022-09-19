/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { ChangeEvent, ReactElement, SelectHTMLAttributes } from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

type IParams = SelectProps & {
  tipoEmbalagem: number;
  onChangeTipoEmbalagem: (x: number) => void;
}

const SelectTipoEmbalagem = ({
  tipoEmbalagem,
  onChangeTipoEmbalagem,
  ...rest
}: IParams): ReactElement => (
  <select
    value={tipoEmbalagem}
    onChange={(e: ChangeEvent<HTMLSelectElement>) => (
      onChangeTipoEmbalagem(Number(e.target.value))
    )}
    {...rest}
  >
    <option value={1}>Unidade</option>
    <option value={2}>Pack</option>
    <option value={3}>Caixa</option>
  </select>
);

export default SelectTipoEmbalagem;
