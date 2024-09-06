import React from 'react';

import { Link } from 'react-router-dom';

import { NavbarContainer } from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Link to='/'>Home</Link>
      <Link to='/favorites'>Favorites</Link>
    </NavbarContainer>
  );
};

export default Navbar;
