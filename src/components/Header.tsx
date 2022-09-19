import {
  ReactElement,
} from 'react';
import theme from '../theme';

const Header = (): ReactElement => (
  <div
    className="pl-4 is-dark d-flex align-items-center"
    style={{
      position: 'fixed',
      width: '100%',
      zIndex: 9,
      backgroundColor: theme.colors.header,
      border: 'none',
      height: 80,
    }}
  >
    <div className="container-fluid" style={{ paddingInline: 0 }}>
      <div className="nk-header-wrap">
        <div className="nk-menu-trigger">
          <span className="fs-25px text-white text-bold">MTRIX</span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
