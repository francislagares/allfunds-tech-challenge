import styled from 'styled-components';

export const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 30%; // Set a fixed width for larger screens
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto; // Allows scrolling inside the cart
  background-color: white; // To prevent content overlap

  @media (max-width: 1024px) {
    position: static; // Remove fixed positioning for smaller screens
    width: 100%; // Make the cart full-width for mobile view
    max-width: 100%; // Ensure it fits the screen width
  }
`;

// CartItem Container to align elements horizontally
export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

// Image of the product
export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
`;

// Product info (name and quantity buttons)
export const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Product name
export const ProductName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

// Buttons to increase/decrease quantity
export const QuantityButtons = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #ddd;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin: 0 5px;
  }
`;

// Price of the product
export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

// Checkout button to show total amount
export const CheckoutButton = styled.button`
  width: 100%;
  background-color: #ff6f61;
  color: white;
  font-size: 18px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
