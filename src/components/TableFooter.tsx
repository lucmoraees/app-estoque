import { ReactElement } from 'react';
import { IChildren } from '../@types';

const TableFooter = ({ children }: IChildren): ReactElement => (
  <div className="d-flex justify-content-end w-100">
    {children}
  </div>
);

export default TableFooter;
