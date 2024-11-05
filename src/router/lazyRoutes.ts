import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/page1/index').then((module) => ({
    default: module.default,
  })),
);

export { HomePage };
