import React, { useState } from 'react';
import Image from 'next/image';
import { IProduct, cartItemsData } from '../../data';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<IProduct[]>(cartItemsData);

  const deleteCartItem = (cartItemId: string) => {
    setCartItems((previousState) =>
      previousState.filter((cartItem) => cartItem.id !== cartItemId)
    );
  };

  return (
    <div className="relative">
      <div
        className="absolute -top-1 -right-2 z-40 flex items-center text-white text-[8px] bg-app-primary-orange px-2 rounded-full cursor-pointer"
        onClick={() => setIsOpen((previousState) => !previousState)}
      >
        {cartItems.length}
      </div>

      <Image
        src="/images/icon-cart.svg"
        width={22}
        height={20}
        alt="Cart icon"
        className="cursor-pointer"
        onClick={() => setIsOpen((previousState) => !previousState)}
      />

      {isOpen && (
        <div className="fixed top-16 left-0 right-0 drop-shadow-lg rounded-md bg-white m-2 sm:absolute sm:top-8 sm:right-0 sm:left-auto sm:w-80 sm:m-auto">
          <header className="border-b">
            <div className="font-bold p-4">Cart</div>
          </header>
          <div className="p-4">
            {cartItems.length === 0 && (
              <div className="min-h-[10rem] flex items-center justify-center">
                <p className="text-app-neutral-blue-grayish-dark">
                  Your cart is empty.
                </p>
              </div>
            )}

            <div className="grid gap-4">
              {cartItems.length > 0 && (
                <ul className="grid gap-2">
                  {cartItems.map((cartItem, index) => (
                    <li key={index}>
                      <CartItem
                        id={cartItem.id}
                        title={cartItem.title}
                        value={cartItem.value}
                        description={cartItem.description}
                        amount={cartItem.amount}
                        images={cartItem.images}
                        thumbnails={cartItem.thumbnails}
                        manufacturer={cartItem.manufacturer}
                        discount={cartItem.discount}
                        delete={deleteCartItem}
                      />
                    </li>
                  ))}
                </ul>
              )}

              <button className="text-white font-bold rounded-lg p-3 bg-app-primary-orange">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
