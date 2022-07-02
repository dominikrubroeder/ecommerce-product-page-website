import React from 'react';
import { navigationData } from '../../data';

const PageNavigation: React.FC = () => {
  return (
    <ul className="grid gap-4 sm:flex sm:items-center">
      {navigationData.map((navigationItem, index) => (
        <li
          key={index}
          className="font-bold cursor-pointer transition-all sm:font-normal sm:py-8 sm:border-b-2 sm:border-transparent sm:text-app-neutral-blue-grayish-dark sm:hover:text-black sm:hover:border-app-primary-orange"
        >
          {navigationItem.title}
        </li>
      ))}
    </ul>
  );
};

export default PageNavigation;
