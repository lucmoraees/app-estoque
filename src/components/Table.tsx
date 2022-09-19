import { ReactElement } from 'react';
import { IChildren } from '../@types';

const Table = ({ children }: IChildren): ReactElement => (
  <div className="card custom-height-table border mb-3">
    <div className="table-responsive">
      <table className="nowrap table dataTable no-footer" role="grid">
        {children}
      </table>
    </div>
  </div>
);

export default Table;
