import { lazy, ReactElement, Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Spinner } from '../components';

const Produtos = lazy(() => import('../pages/Produtos'));

const Router = (): ReactElement => (
  <BrowserRouter>
    <Suspense
      fallback={<Spinner style={{ top: '300px', display: 'inline-block' }} />}
    >
      <Routes>
        <Route path="/" element={<Produtos />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;
