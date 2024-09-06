import { FC } from 'react';

import { RouteObject, useRoutes } from 'react-router-dom';

import { ProductList } from '../components/products/ProductList';
import { Layout } from '../layout';
import FavoritesPage from '../pages/Favorites';

const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <ProductList />,
        },
        {
          path: '/favorites',
          element: <FavoritesPage />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default AppRouter;
