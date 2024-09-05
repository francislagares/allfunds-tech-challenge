import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

import App from '@/App';

import Providers from './providers';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Providers>
      <App />
      <ReactQueryDevtools />
    </Providers>
  </React.StrictMode>,
);
