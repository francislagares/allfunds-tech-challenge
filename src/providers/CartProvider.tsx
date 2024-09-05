import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { Product } from '@/domain/entities/product';
import { ProductService } from '@/infrastucture/product/product.service.';

const productService = new ProductService();

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  getItem: (product: Product) => CartItem | null;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  getItemCount: () => number;
  cartItems: CartItem[];
  totalAmount: () => number;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItem = (product: Product) => {
    const item = cartItems.find(item => item.product.id === product.id);
    return item || null;
  };

  const updateStock = async (productId: string, change: number) => {
    // Fetch the current product data
    const products = await productService.getAllProducts();
    const product = products.find(p => p.id === productId);
    if (product) {
      // Calculate the new stock value
      const newStock = product.stock + change;
      // Update the stock in the database
      await productService.updateStock(productId, newStock);
    }
  };

  const addToCart = async (product: Product) => {
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
      // Decrease stock
      await updateStock(product.id, -1);
    } else {
      // Add new item to the cart with quantity 1
      setCartItems([...cartItems, { product, quantity: 1 }]);
      // Decrease stock
      await updateStock(product.id, -1);
    }
  };

  const removeFromCart = async (product: Product) => {
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
      // Increase stock
      await updateStock(product.id, 1);
    } else {
      // Remove item if quantity is 1
      setCartItems(cartItems.filter(item => item.product.id !== product.id));
      // Increase stock
      await updateStock(product.id, 1);
    }
  };

  const getItemCount = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

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

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
