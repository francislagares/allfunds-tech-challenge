import { PropsWithChildren } from 'react';

import { CartProvider } from './CartProvider';
import { FavoritesProvider } from './FavoritesProvider';
import ReactQueryProvider from './ReactQueryProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <CartProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </CartProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
