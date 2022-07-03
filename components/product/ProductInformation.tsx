import React, { useState, useContext } from 'react';
import { IProduct } from '../../data';
import Image from 'next/image';
import { CartContext } from '../../store/CartContext';

interface ProductInformationProps {
  product: IProduct;
}

const ProductInformation: React.FC<ProductInformationProps> = (props) => {
  const cartCtx = useContext(CartContext);
  const product = props.product;
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    if (amount >= 5) return;

    setAmount((previousState) => previousState + 1);
  };

  const decreaseAmount = () => {
    if (amount === 0) return;

    setAmount((previousState) => previousState - 1);
  };

  const addToCartHandler = () => {
    const cartHTMLElement = document.getElementById('cart');

    cartHTMLElement?.classList.add('animate-ping');

    cartCtx?.addProduct({
      ...product,
      amount,
    });

    setTimeout(() => {
      cartHTMLElement?.classList.remove('animate-ping');
    }, 1000);
  };

  return (
    <div>
      <div className="grid gap-8">
        <header className="grid gap-2">
          <h2 className="uppercase text-app-primary-orange text-xs tracking-wider">
            {product.manufacturer}
          </h2>
          <h1 className="text-3xl font-bold">{product.title}</h1>
        </header>

        <p className="text-app-neutral-blue-grayish-dark">
          {product.description}
        </p>

        <div className="grid gap-1">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">
              $
              {product.discount
                ? (product.value * product.discount).toFixed(2)
                : product.value.toFixed(2)}
            </span>

            {product.discount && (
              <span className="text-app-primary-orange bg-app-primary-orange/10 font-bold text-xs p-1 rounded-md">
                {product.discount * 100}%
              </span>
            )}
          </div>

          {product.discount && (
            <p className="text-app-neutral-blue-grayish-dark line-through">
              ${product.value.toFixed(2)}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-app-neutral-blue-grayish-light rounded-lg">
            <button
              className={`p-4 font-bold ${
                amount === 0
                  ? 'text-app-primary-orange/25 cursor-not-allowed'
                  : 'text-app-primary-orange'
              }`}
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
              className={`p-4 font-bold ${
                amount === 5
                  ? 'text-app-primary-orange/25 cursor-not-allowed'
                  : 'text-app-primary-orange'
              }`}
              onClick={increaseAmount}
            >
              +
            </button>
          </div>

          <button
            className={`font-bold rounded-lg p-4 flex-1 shadow-lg transition-all ${
              amount === 0
                ? 'cursor-not-allowed bg-app-primary-orange/10 text-app-primary-orange/25 shadow-app-primary-orange/5'
                : 'text-white cursor-pointer bg-app-primary-orange shadow-app-primary-orange/50 hover:opacity-70'
            }`}
            onClick={addToCartHandler}
            disabled={amount === 0}
          >
            {amount === 0 && <span>Increase amount to buy</span>}

            {amount > 0 && (
              <span className="flex items-center justify-center gap-2">
                <Image
                  src="/images/icon-cart-white.svg"
                  width={22}
                  height={20}
                  alt="Cart icon"
                />
                <span>Add to cart</span>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
