import { useEffect, useState } from 'react';

import { Cart } from '@/presentation/components/cart';
import { ProductList } from '@/presentation/components/products/ProductList';

import { LayoutContainer, ViewSwitchButton } from './Layout.styles';

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCartView, setIsCartView] = useState(false);

  // Detect window width changes
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleView = () => {
    setIsCartView(!isCartView);
  };

  // If the window width is greater than 1024px, show both components
  const isTwoViewLayout = windowWidth <= 1024;

  return (
    <LayoutContainer>
      {isTwoViewLayout ? (
        <>
          {isCartView ? <Cart /> : <ProductList />}
          <ViewSwitchButton onClick={toggleView}>
            {isCartView ? 'Back to Products' : 'View Cart'}
          </ViewSwitchButton>
        </>
      ) : (
        <>
          <ProductList />
          <Cart />
        </>
      )}
    </LayoutContainer>
  );
};

export default Layout;
