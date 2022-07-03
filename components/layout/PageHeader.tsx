import React from 'react';
import Image from 'next/image';
import Cart from '../cart/Cart';
import PageNavigation from './PageNavigation';
import Sidebar from './Sidebar';
import Link from 'next/link';

const PageHeader: React.FC = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between gap-2 max-w-screen-xl m-auto border-b py-2 px-4 z-40 bg-white sm:mb-4 sm:px-2 sm:py-0 md:mb-16">
      <div className="flex items-center gap-4 sm:gap-8">
        <div className="sm:hidden">
          <Sidebar />
        </div>

        <Link href="/">
          <a>
            <Image
              src="/images/logo.svg"
              width={137.5}
              height={20}
              alt="E-commerce product page logo"
              className="cursor-pointer"
            />
          </a>
        </Link>

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
