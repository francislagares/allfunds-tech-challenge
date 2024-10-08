import { PropsWithChildren, ReactElement } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';

import { CartProvider } from '@/providers/CartProvider';

const AllProviders = ({ children }: PropsWithChildren) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
};

export default AllProviders;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
