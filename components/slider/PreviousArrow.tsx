import React from 'react';
import Image from 'next/image';

interface PreviousArrowProps {
  onClick: () => void;
}

const PreviousArrow: React.FC<PreviousArrowProps> = (props) => {
  return (
    <button
      className="flex items-center justify-center w-12 h-12 bg-white rounded-full translate-x-1/2 z-50"
      onClick={props.onClick}
    >
      <Image
        src="/images/icon-previous.svg"
        width={8}
        height={16}
        alt="Icon previous"
      />
    </button>
  );
};

export default PreviousArrow;
