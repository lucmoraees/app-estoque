import { ReactElement, ReactNode } from 'react';

interface IProps {
  title: string;
  button?: ReactNode;
}

const TableTitle = ({ title, button }: IProps): ReactElement => (
  <div className="nk-block-head pb-0 mb-1 mt-1">
    <div className="nk-block-head-content d-flex flex-row justify-content-between align-items-center mb-0">
      <h4
        className="fs-18px text-uppercase mb-0"
        style={{ color: '#7c7c7e' }}
      >
        {title}
      </h4>
      {button}
    </div>
  </div>
);

export default TableTitle;

TableTitle.defaultProps = {
  button: undefined,
};
