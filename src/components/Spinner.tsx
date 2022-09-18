import { CSSProperties, ReactElement } from 'react';

type Props = {
  style?: CSSProperties;
};

const Spinner = ({ style }: Props): ReactElement => (
  <div className="text-center" style={{ height: 40 }}>
    <div
      className="m-loader m-loader--primary m-loader--lg"
      style={style}
    />
  </div>
);

Spinner.defaultProps = {
  style: undefined,
};

export default Spinner;
