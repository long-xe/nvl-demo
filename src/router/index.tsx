import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import * as LazyRoutes from './lazyRoutes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<></>}>
      <Route element={<MainLayout />}>
        <Route path='/' element={<LazyRoutes.HomePage />} />
      </Route>
    </Route>,
  ),
);
