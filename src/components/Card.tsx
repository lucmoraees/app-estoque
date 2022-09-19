import { ReactElement } from 'react';
import { IChildren } from '../@types';

const Card = ({ children }: IChildren): ReactElement => (
  <div className="nk-content nk-content-fluid content-padding-inline" style={{ marginTop: 30 }}>
    <div className="nk-content-inner">
      <div className="nk-content-body d-flex flex-column">
        <div className="nk-block mt-4">
          <div className="row g-gs">
            <div className="card card-bordered w-100 mt-4 pl-1 pr-1 card-shadow height-card">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
