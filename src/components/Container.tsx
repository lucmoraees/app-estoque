import { ReactElement } from 'react';
import { Header, Loading } from '.';
import { IChildren } from '../@types';

const ContainerRoot = ({ children }: IChildren): ReactElement => (
  <div className="nk-body npc-invest bg-white no-touch nk-nio-theme">
    <Loading />
    <div className="nk-app-root">
      <div className="nk-wrap ">
        <div className="nk-wrap ">
          <Header />
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default ContainerRoot;
