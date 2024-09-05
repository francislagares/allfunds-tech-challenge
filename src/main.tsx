import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

import App from '@/App';

import Providers from './providers';

import '@/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
      <ReactQueryDevtools />
    </Providers>
  </React.StrictMode>,
);
