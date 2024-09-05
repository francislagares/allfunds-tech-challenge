import { Cart } from '../components/cart';
import { ProductList } from '../components/products/ProductList';

import { LayoutContainer } from './Layout.styles';

const Layout = () => {
  return (
    <LayoutContainer>
      <ProductList />
      <Cart />
    </LayoutContainer>
  );
};

export default Layout;
