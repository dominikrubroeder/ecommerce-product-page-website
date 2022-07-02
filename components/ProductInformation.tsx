import React, { useState, useContext } from 'react';
import { IProduct } from '../data';
import Image from 'next/image';
import { CartContext } from '../context/CartContext';

interface ProductInformationProps {
  product: IProduct;
}

const ProductInformation: React.FC<ProductInformationProps> = (props) => {
  const cartCtx = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    if (amount >= 5) return;

    setAmount((previousState) => previousState + 1);
  };

  const decreaseAmount = () => {
    if (amount === 0) return;

    setAmount((previousState) => previousState - 1);
  };

  return (
    <div>
      <div className="grid gap-8">
        <header className="grid gap-2">
          <h2 className="uppercase text-app-primary-orange text-xs tracking-wider">
            {props.product.manufacturer}
          </h2>
          <h1 className="text-3xl font-bold">{props.product.title}</h1>
        </header>

        <p className="text-app-neutral-blue-grayish-dark">
          {props.product.description}
        </p>

        <div className="grid gap-1">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">
              $
              {props.product.discount
                ? (props.product.value * props.product.discount).toFixed(2)
                : props.product.value.toFixed(2)}
            </span>

            {props.product.discount && (
              <span className="text-app-primary-orange bg-app-primary-orange/10 font-bold text-xs p-1 rounded-md">
                {props.product.discount * 100}%
              </span>
            )}
          </div>

          {props.product.discount && (
            <p className="text-app-neutral-blue-grayish-dark line-through">
              ${props.product.value.toFixed(2)}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-app-neutral-blue-grayish-light rounded-lg">
            <button
              className="p-4 font-bold text-app-primary-orange"
              onClick={decreaseAmount}
            >
              -
            </button>
            <input
              type="number"
              placeholder="0"
              className="w-16 text-center font-bold bg-transparent"
              max={5}
              min={0}
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
            />
            <button
              className="p-4 font-bold rounded-tr-x rounded- text-app-primary-orange"
              onClick={increaseAmount}
            >
              +
            </button>
          </div>

          <button
            className="text-white font-bold rounded-lg p-4 bg-app-primary-orange flex items-center justify-center gap-2 flex-1"
            onClick={() =>
              cartCtx?.addProduct({
                ...props.product,
                amount,
              })
            }
            disabled={amount === 0}
          >
            <Image
              src="/images/icon-cart.svg"
              width={22}
              height={20}
              alt="Cart icon"
              className="brightness-0 invert-1"
            />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
