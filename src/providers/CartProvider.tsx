import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { Product } from '@/domain/entities/product';

// Type definitions for a cart item and context
type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  getItem: (product: Product) => CartItem | null;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  getItemCount: () => number;
  cartItems: CartItem[]; // Add cartItems to the context so components can access it
  totalAmount: () => number; // Method to calculate the total amount
};

// Create a Cart Context with default values
const CartContext = createContext<CartContextType>({} as CartContextType);

// CartProvider component
export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItem = (product: Product) => {
    const item = cartItems.find(item => item.product.id === product.id);
    return item || null;
  };

  const addToCart = (product: Product) => {
    const item = getItem(product);

    if (item) {
      // Update quantity if the product is already in the cart
      setCartItems(
        cartItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // Add new item to the cart with quantity 1
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Product) => {
    const item = getItem(product);
    if (!item) return;

    if (item.quantity > 1) {
      // Decrease quantity if more than 1
      setCartItems(
        cartItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    } else {
      // Remove item if quantity is 1
      setCartItems(cartItems.filter(item => item.product.id !== product.id));
    }
  };

  const getItemCount = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total amount of the cart
  const totalAmount = () =>
    cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );

  return (
    <CartContext.Provider
      value={{
        getItem,
        addToCart,
        removeFromCart,
        getItemCount,
        cartItems,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the CartContext
export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
