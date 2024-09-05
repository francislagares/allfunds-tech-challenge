import { FC } from 'react';

import { useCartContext } from '@/providers/CartProvider';

import { CartContainer, CheckoutButton } from './Cart.styles';
import CartItem from './CartItem';

const Cart: FC = () => {
  const { cartItems, removeFromCart, addToCart, totalAmount } =
    useCartContext();

  return (
    <CartContainer>
      <CheckoutButton>Checkout - ${totalAmount().toFixed(2)}</CheckoutButton>
      {cartItems.map(item => (
        <CartItem
          key={item.product.id}
          imageUrl={item.product.image_url}
          productName={item.product.productName}
          productPrice={item.product.price}
          quantity={item.quantity}
          onIncrease={() => addToCart(item.product)}
          onDecrease={() => removeFromCart(item.product)}
        />
      ))}
    </CartContainer>
  );
};

export default Cart;
