import React from 'react';
import { CartContextType, IProduct, productList } from '../data';

export const CartContext = React.createContext<CartContextType | null>(null);

type CartProviderProps = {
  children?: React.ReactNode;
};

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState<IProduct[]>(productList);

  const addProduct = (newCartItem: IProduct) => {
    // Check if product already exists in cart
    if (cartItems.some((cartItem) => cartItem.id === newCartItem.id)) {
      const existingProductIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === newCartItem.id
      );
      const updatedCartItems = [
        ...cartItems,
        (cartItems[existingProductIndex].amount += newCartItem.amount),
      ];

      // setCartItems(previousState => updatedCartItems)
    } else {
      setCartItems((previousState) => [...previousState, newCartItem]);
    }
  };

  const deleteProduct = (productId: string) => {
    setCartItems((previousState) =>
      previousState.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
