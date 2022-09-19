import { ReactElement } from 'react';

interface Props {
  text: string;
  colSpan: number;
}

const TableEmpty = ({ text, colSpan }: Props): ReactElement => (
  <tr>
    <td colSpan={colSpan} className="example-alert p-0">
      <div className="alert alert-fill alert-light alert-icon">
        <em className="icon ni ni-alert-circle" />
        <strong>{text}</strong>
      </div>
    </td>
  </tr>
);

export default TableEmpty;
