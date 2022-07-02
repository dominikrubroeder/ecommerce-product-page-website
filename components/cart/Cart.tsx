import React, { useState } from 'react';
import Image from 'next/image';
import { ICartItem, cartItemsData } from '../../data';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[]>(cartItemsData);

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
        <div className="absolute top-8 drop-shadow rounded-sm bg-white w-80 p-2 right-0">
          <header className="border-b">
            <div className="font-bold p-4">Cart</div>
          </header>
          <div className="flex items-center justify-center min-h-[10rem]">
            {cartItems.length === 0 && (
              <p className="text-app-neutral-blue-grayish-dark">
                Your cart is empty.
              </p>
            )}

            {cartItems.length > 0 && (
              <ul>
                {cartItems.map((cartItem, index) => (
                  <li key={index}>{cartItem.title}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
