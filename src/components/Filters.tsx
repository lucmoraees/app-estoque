/* eslint-disable no-unused-vars */
import { FormEvent, ReactElement, useState } from 'react';
import { exibirToastWarning } from '../utils';

interface Column {
  name: string;
  value: string;
}

interface Props {
  columns?: Column[];
  hasQuantidade?: boolean;
  onChangeFilters: (c: string | undefined, v: string | undefined) => void;
  onChangeQuantidade: (q: number) => void;
}

const Filters = ({
  columns,
  hasQuantidade,
  onChangeFilters,
  onChangeQuantidade,
}: Props): ReactElement => {
  const [column, setColumn] = useState<string | undefined>(undefined);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [quantidade, setQuantidade] = useState<number>(10);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (columns && !column) {
      exibirToastWarning('Selecione uma coluna para pesquisar');
      return;
    }

    if (!value) {
      exibirToastWarning('Digite algum filtro para pesquisar');
      return;
    }

    onChangeFilters(column, value);
  };

  const cleanFiltros = () => {
    setColumn(undefined);
    setValue(undefined);
    onChangeFilters(undefined, undefined);
  };

  const handleChangeQuantidade = (q: number) => {
    setQuantidade(q);
    onChangeQuantidade(q);
  };

  return (
    <div className="row justify-between w-100 m-0 pb-2 pt-2 gap-10 d-flex m-0">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="text-left p-0 d-flex flex-row gap-10 w-mobile-100 flex-wrap justify-content-center w-100"
      >
        {columns ? (
          <div className="text-right p-0 w-min-200px w-mobile-100">
            <div className="datatable-filter">
              <div className="dataTables_length">
                <div className="form-control-select">
                  <select
                    name="value"
                    className="custom-select form-control"
                    value={column || ''}
                    onChange={(c) => setColumn(c.target.value)}
                  >
                    <option value="" disabled>Selecione uma coluna</option>
                    {columns.map((c) => (
                      <option value={c.value}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="dataTables_filter w-min-200px w-mobile-100 flex-1 flex-row d-flex gap-10">
          <input
            id="filter-input"
            type="search"
            name="value"
            className="form-control"
            placeholder="Digite aqui..."
            value={value || ''}
            onChange={(e) => setValue(e.target.value)}
          />
          {hasQuantidade ? (
            <div className="text-right p-0 w-mobile-100">
              <div className="datatable-filter">
                <div className="dataTables_length">
                  <div className="form-control-select">
                    <select
                      style={{ minWidth: 80 }}
                      name="length-table"
                      className="custom-select form-control"
                      value={quantidade}
                      onChange={(e) => handleChangeQuantidade(Number(e.target.value))}
                    >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="form-group w-mobile-100 gap-10 d-flex">
          <button
            type="submit"
            className="btn btn-green btn-block flex-1"
          >
            Pesquisar
          </button>
          <button
            type="button"
            className="btn btn-blue btn-block flex-1 m-0"
            onClick={cleanFiltros}
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;

Filters.defaultProps = {
  hasQuantidade: true,
  columns: undefined,
};
