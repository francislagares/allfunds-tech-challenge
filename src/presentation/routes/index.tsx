import { RouteObject } from 'react-router-dom';

import { ProductList } from '@/presentation/components/products/ProductList';
import { Layout } from '@/presentation/layout';
import FavoritesPage from '@/presentation/pages/Favorites';

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

export default routes;
