import { useCartContext } from '@/providers/CartProvider';

import { CartContainer, CheckoutButton } from './Cart.styles';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart, totalAmount } =
    useCartContext();

  return (
    <CartContainer>
      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <CartItem
            key={item.product.id}
            imageUrl={item.product.image_url}
            productName={item.product.productName}
            productPrice={item.product.price}
            quantity={item.quantity}
            onIncrease={() => addToCart(item.product)}
            onDecrease={() => removeFromCart(item.product)}
          />
        ))
      )}
      <CheckoutButton>Checkout - ${totalAmount().toFixed(2)}</CheckoutButton>
    </CartContainer>
  );
};

export default Cart;
