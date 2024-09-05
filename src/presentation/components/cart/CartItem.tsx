import React from 'react';

import {
  CartItemContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  QuantityButtons,
} from './Cart.styles';

const CartItem: React.FC<CartItemProps> = ({
  imageUrl,
  productName,
  productPrice,
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <CartItemContainer>
      <ProductImage src={imageUrl} alt={productName} />
      <ProductInfo>
        <ProductName>{productName}</ProductName>
        <QuantityButtons>
          <button onClick={onDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={onIncrease}>+</button>
        </QuantityButtons>
      </ProductInfo>
      <ProductPrice>${productPrice.toFixed(2)}</ProductPrice>
    </CartItemContainer>
  );
};

export default CartItem;
