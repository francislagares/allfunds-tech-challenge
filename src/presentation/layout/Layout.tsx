import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Cart } from '@/presentation/components/cart';
import Navbar from '@/presentation/components/navbar/Navbar';

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
    <>
      <Navbar />
      <LayoutContainer>
        {isTwoViewLayout ? (
          <>
            {isCartView ? <Cart /> : <Outlet />}
            <ViewSwitchButton onClick={toggleView}>
              {isCartView ? 'Back to Products' : 'View Cart'}
            </ViewSwitchButton>
          </>
        ) : (
          <>
            <Outlet />
            <Cart />
          </>
        )}
      </LayoutContainer>
    </>
  );
};

export default Layout;
