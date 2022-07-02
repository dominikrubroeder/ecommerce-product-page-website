import React, { useState } from 'react';
import Image from 'next/image';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Image
        src="/images/icon-cart.svg"
        width={22}
        height={20}
        alt="Cart icon"
        className="cursor-pointer"
        onClick={() => setIsOpen((previousState) => !previousState)}
      />

      {isOpen && (
        <div className="absolute drop-shadow rounded-sm bg-white min-w-[20rem] right-0">
          <header className="border-b">
            <div className="font-bold p-4">Cart</div>
          </header>
          <div className="flex items-center justify-center min-h-[10rem]">
            <p className="text-app-neutral-blue-grayish-dark">
              Your cart is empty.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;