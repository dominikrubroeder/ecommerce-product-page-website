import React, { useState } from 'react';
import { CartContextType, IProduct } from '../data';

export const CartContext = React.createContext<CartContextType | null>(null);

type CartProviderProps = {
  children?: React.ReactNode;
};

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState<IProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addProduct = (newCartItem: IProduct) => {
    // Check if product already exists in cart
    if (cartItems.some((cartItem) => cartItem.id === newCartItem.id)) {
      // Do not add as new product, but increase amount of already existing product in cart by the selected amount
      cartItems.filter((cartItem: IProduct) => {
        if (cartItem.id === newCartItem.id) {
          cartItem.amount += newCartItem.amount;
          setCartItems([...cartItems]);
        }
      });
    } else {
      setCartItems((previousState) => [...previousState, newCartItem]);
    }
  };

  const deleteProduct = (productId: string) => {
    setCartItems((previousState) =>
      previousState.filter((product) => product.id !== productId)
    );
  };

  const isOpenHandler = (actionType: string) => {
    if (actionType === 'open') {
      setIsOpen(true);
    }

    if (actionType === 'close') {
      setIsOpen(false);
    }

    if (actionType === 'toggle') {
      setIsOpen((previousState) => !previousState);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, isOpen, isOpenHandler, addProduct, deleteProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
