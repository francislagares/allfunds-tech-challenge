import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App';
import routes from '@/presentation/routes';

import Providers from './providers';
import GlobalStyles from './styles/GlobalStyles';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Providers>
      <RouterProvider router={router} />
      <App />
      <ReactQueryDevtools />
    </Providers>
  </React.StrictMode>,
);
