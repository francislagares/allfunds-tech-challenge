import styled from 'styled-components';

export const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 3;
  padding-right: 30%;

  @media (min-width: 1025px) {
    > div {
      flex: 1 1 calc(25% - 20px); // 4 columns for larger screens
    }
  }

  @media (max-width: 1024px) {
    padding-right: 0;
    > div {
      flex: 1 1 calc(50% - 20px); // 2 columns for medium screens
    }
  }

  @media (max-width: 768px) {
    > div {
      flex: 1 1 100%; // 1 column for mobile view
    }
  }
`;

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  min-width: 210px;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  padding: 0.5rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  flex-grow: 1;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
`;

export const StockAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const StockInfo = styled.p<{ stock: number }>`
  font-size: 0.8rem;
  color: ${({ stock }) => (stock > 0 ? '#28a745' : '#dc3545')};
`;

export const AddToCartButton = styled.button`
  background-color: #213547;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #555;
  }
`;

// Cart summary for desktop
export const CartContainer = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  max-width: 350px;

  @media (max-width: 1024px) {
    display: none; // Hide the cart summary on smaller screens
  }
`;

// Mobile cart view container (for 2-view navigation)
export const MobileCartContainer = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block; // Show only on smaller screens
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
`;

// Button to toggle views on mobile
export const NavButton = styled.button`
  display: none;
  background-color: #213547;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  opacity: 0.8;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: inline-block; // Show navigation buttons on smaller screens
  }
`;

// Button styles for toggling between product and cart view
export const ViewSwitchButton = styled(NavButton)`
  position: fixed;
  top: 10px;
  right: 8px;
`;
