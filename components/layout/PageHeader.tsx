import React from 'react';
import Image from 'next/image';
import Cart from '../Cart';
import PageNavigation from './PageNavigation';
import Sidebar from './Sidebar';

const PageHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between gap-2 max-w-screen-xl m-auto border-b p-2 sm:px-2">
      <div className="flex items-center gap-8">
        <div className="sm:hidden">
          <Sidebar />
        </div>

        <Image
          src="/images/logo.svg"
          width={137.5}
          height={20}
          alt="E-commerce product page logo"
        />

        <div className="hidden sm:inline-block">
          <PageNavigation />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-8">
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
