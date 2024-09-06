import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  align-items: center;
  padding: 10px 0;
  color: #ef4444;

  a {
    text-decoration: none;
    font-size: 18px;
    margin: 0 15px; /* Add margin between links */

    &:hover {
      text-decoration: underline;
    }
  }
`;
