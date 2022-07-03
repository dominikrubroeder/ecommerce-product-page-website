import React from 'react';
import Image from 'next/image';

interface NextArrowProps {
  onClick: () => void;
}

const NextArrow: React.FC<NextArrowProps> = (props) => {
  return (
    <button
      className="flex items-center justify-center w-12 h-12 bg-white rounded-full -translate-x-1/2 z-50"
      onClick={props.onClick}
    >
      <Image
        src="/images/icon-next.svg"
        width={8}
        height={16}
        alt="Icon next"
      />
    </button>
  );
};

export default NextArrow;
