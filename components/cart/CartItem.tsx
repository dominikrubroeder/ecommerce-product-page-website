import Image from 'next/image';
import React, { useContext } from 'react';
import { IProduct } from '../../data';
import { CartContext } from '../../store/CartContext';

const CartItem: React.FC<IProduct> = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className="flex items-center gap-2">
      <div className="shrink-0 flex items-center">
        <Image
          src={props.thumbnails[0]}
          width={40}
          height={40}
          alt={props.title}
          className="rounded-sm"
        />
      </div>

      <div className="flex items-center justify-between gap-2 w-full">
        <div className="w-full">
          <h2 className="text-app-neutral-blue-grayish-dark whitespace-nowrap text-ellipsis overflow-hidden w-48">
            {props.title}
          </h2>

          <p>
            <span className="text-app-neutral-blue-grayish-dark mr-1">
              ${props.value.toFixed(2)} x {props.amount}
            </span>
            ${(props.value * props.amount).toFixed(2)}
          </p>
        </div>

        <button
          className="shrink-0"
          onClick={() => cartCtx?.deleteProduct(props.id)}
        >
          <Image
            src="/images/icon-delete.svg"
            width={14}
            height={16}
            alt="Icon delete"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
