/* eslint-disable no-unused-vars */
import { ReactElement } from 'react';
import { Anchor } from '.';

interface Props {
  pagina: number;
  totalPaginas: number;
  onChangePagina: (p: number) => void;
}

const Pagination = ({ pagina, totalPaginas, onChangePagina }: Props): ReactElement => (
  <nav>
    <ul className="pagination">
      <li className="page-item pointer">
        <button
          type="button"
          className={`page-link fs-10px ${pagina <= 1 ? 'disabled-opacity' : ''}`}
          aria-label="Prev"
          onClick={() => onChangePagina(1)}
          disabled={pagina <= 1}
          tabIndex={0}
        >
          <span aria-hidden="true">
            <i className="fa-solid fa-angles-left" />
          </span>
        </button>
      </li>
      <li className="page-item pointer">
        <button
          type="button"
          className={`page-link fs-10px ${pagina <= 1 ? 'disabled-opacity' : ''}`}
          aria-label="Prev"
          onClick={() => onChangePagina(pagina - 1)}
          disabled={pagina <= 1}
          tabIndex={0}
        >
          <span aria-hidden="true">
            <i className="fa-solid fa-chevron-left" />
          </span>
        </button>
      </li>
      {pagina !== 1 ? (
        <li className="page-item pointer">
          <button
            type="button"
            className="page-link"
            aria-label="Prev"
            onClick={() => onChangePagina(pagina - 1)}
            tabIndex={0}
          >
            {pagina - 1}
          </button>
        </li>
      ) : null}
      <li className="page-item-active pointer">
        <Anchor
          type="button"
          className="pagination-selected page-link"
          aria-label="Prev"
          tabIndex={0}
        >
          {pagina}
        </Anchor>
      </li>
      {pagina < totalPaginas ? (
        <li className="page-item pointer">
          <button
            type="button"
            className="page-link"
            aria-label="Prev"
            onClick={() => onChangePagina(pagina + 1)}
            tabIndex={0}
          >
            {pagina + 1}
          </button>
        </li>
      ) : null}
      <li className="page-item pointer">
        <button
          type="button"
          className={`page-link fs-10px ${pagina === totalPaginas || totalPaginas === 0 ? 'disabled-opacity' : ''}`}
          aria-label="Prev"
          onClick={() => onChangePagina(pagina + 1)}
          disabled={pagina === totalPaginas || totalPaginas === 0}
          tabIndex={0}
        >
          <span aria-hidden="true">
            <i className="fa-solid fa-chevron-right" />
          </span>
        </button>
      </li>
      <li className="page-item pointer">
        <button
          type="button"
          className={`page-link fs-10px ${pagina === totalPaginas || totalPaginas === 0 ? 'disabled-opacity' : ''}`}
          aria-label="Prev"
          onClick={() => onChangePagina(totalPaginas)}
          disabled={pagina === totalPaginas || totalPaginas === 0}
          tabIndex={0}
        >
          <span aria-hidden="true">
            <i className="fa-solid fa-angles-right" />
          </span>
        </button>
      </li>
    </ul>
  </nav>
);

export default Pagination;
