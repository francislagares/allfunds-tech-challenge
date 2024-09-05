import styled from 'styled-components';

// Layout container to manage both product list and cart visibility
export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column; // Switch to column layout for smaller screens
  }
`;

export const ViewSwitchButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;
