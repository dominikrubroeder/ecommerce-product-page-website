import React, { useState } from 'react';
import PageNavigation from './PageNavigation';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Image
        src="/images/icon-menu.svg"
        width={16}
        height={15}
        alt="Icon menu"
        className="cursor-pointer"
        onClick={() => setIsOpen((previousState) => !previousState)}
      />

      {isOpen && (
        <div>
          <div className="fixed left-0 top-0 h-screen p-4 max-w-xs w-full bg-white z-50 sm:hidden">
            <header className="pb-8">
              <Image
                src="/images/icon-close.svg"
                width={14}
                height={15}
                alt="Icon close"
                className="cursor-pointer"
                onClick={() => setIsOpen((previousState) => !previousState)}
              />
            </header>
            <PageNavigation />
          </div>

          <div
            className="fixed inset-0 bg-black/70 w-screen h-screen cursor-pointer z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
