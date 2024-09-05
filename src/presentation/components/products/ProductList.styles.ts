import styled from 'styled-components';

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 50px;
`;

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
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
