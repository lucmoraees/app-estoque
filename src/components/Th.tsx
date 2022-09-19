/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { ThHTMLAttributes, ReactElement } from 'react';
import { IChangeOrder } from '../@types';

interface Props {
  column: string;
  columnValue?: string;
  columnToOrder?: string | undefined;
  order?: 'ASC' | 'DESC' | undefined;
  changeOrder?: (x: IChangeOrder) => void;
}

type ThProps = ThHTMLAttributes<HTMLTableCellElement> & Props;

const Th: React.FC<ThProps> = ({
  column,
  columnValue,
  columnToOrder,
  order,
  changeOrder,
  ...rest
}): ReactElement => {
  const handleClassNameSort = (): string => {
    if (!columnToOrder || !order) {
      return '';
    }

    if (columnToOrder !== columnValue) {
      return 'sorting';
    }

    if (order === 'ASC') {
      return 'sorting_asc';
    }

    return 'sorting_desc';
  };

  const handleChangeOrder = () => {
    if (!changeOrder) return;

    const isTheColumnToOrder = columnToOrder === columnValue;

    if (isTheColumnToOrder) {
      const newOrder = order === 'DESC' ? 'ASC' : 'DESC';
      changeOrder({ columnToOrder: String(columnValue), order: newOrder });
      return;
    }

    const newOrder = order || 'ASC';

    changeOrder({ columnToOrder: String(columnValue), order: newOrder });
  };

  return (
    <th
      {...rest}
      scope="col"
      className={`${handleClassNameSort()} ${rest.className} custom-th`}
      onClick={handleChangeOrder}
    >
      {column}
    </th>
  );
};

export default Th;

Th.defaultProps = {
  columnToOrder: undefined,
  order: undefined,
  changeOrder: undefined,
  columnValue: undefined,
};
