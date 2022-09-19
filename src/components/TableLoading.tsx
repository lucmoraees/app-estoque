import { ReactElement } from 'react';

interface Props {
  colSpan: number;
}

const TableLoading = ({ colSpan }: Props): ReactElement => (
  <tr>
    <td colSpan={colSpan} className="example-alert p-4">
      <div className="d-flex w-100 justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </td>
  </tr>
);

export default TableLoading;
