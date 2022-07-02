import React from 'react';
import Image from 'next/image';
import { navigationData } from '../../data';
import Cart from '../Cart';

const PageHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between gap-2 max-w-screen-xl m-auto border-b px-2">
      <div className="flex items-center gap-8">
        <Image
          src="/images/logo.svg"
          width={137.5}
          height={20}
          alt="E-commerce product page logo"
        />

        <ul className="flex items-center gap-4">
          {navigationData.map((navigationItem, index) => (
            <li
              key={index}
              className="text-app-neutral-blue-grayish-dark cursor-pointer py-8 border-b-2 border-transparent transition-all hover:text-black hover:border-app-primary-orange"
            >
              {navigationItem.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-8">
        <Cart />

        <div className="flex items-center justify-center border-2 border-transparent cursor-pointer rounded-full transition-all hover:border-app-primary-orange hover:scale-105">
          <Image
            src="/images/image-avatar.png"
            width={40}
            height={40}
            alt="Cart icon"
          />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
