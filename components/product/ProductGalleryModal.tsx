import Image from 'next/image';
import React, { useState } from 'react';
import { IProduct } from '../../data';
import NextArrow from '../slider/NextArrow';
import PreviousArrow from '../slider/PreviousArrow';

interface ProductGalleryModalProps {
  product: IProduct;
  activeImage: number;
  stateHandler: (params: any) => void;
}

const ProductGalleryModal: React.FC<ProductGalleryModalProps> = (props) => {
  const product = props.product;
  const [activeImage, setActiveImage] = useState(props.activeImage);

  const nextImageHandler = () => {
    // Check if current image is last one
    if (activeImage === product.images.length - 1) {
      // Restart gallery at the beginning
      setActiveImage(0);
      return;
    }

    setActiveImage((previousState) => previousState + 1);
  };

  const previousImageHandler = () => {
    // Check if next image would be not available in Array
    if (activeImage - 1 === -1) {
      // Restart gallery at the beginning
      setActiveImage(product.images.length);
    }

    setActiveImage((previousState) => previousState - 1);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="grid gap-8 z-50">
        <div className="flex items-center justify-center">
          <PreviousArrow onClick={previousImageHandler} />

          <Image
            width={500}
            height={500}
            src={product.images[activeImage]}
            alt={product.title}
            className="rounded-xl"
          />

          <NextArrow onClick={nextImageHandler} />
        </div>

        <nav className="hidden md:flex md:items-start md:justify-center">
          <ul className="flex items-center justify-between gap-2">
            {product.thumbnails.map((thumbnail, index) => (
              <li
                key={index}
                className={`flex items-center justify-center cursor-pointer border-4 rounded-xl transition-all hover:opacity-75 ${
                  index === activeImage
                    ? 'border-app-primary-orange opacity-60'
                    : 'border-transparent'
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={thumbnail}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="rounded-lg"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className="w-screen h-screen fixed inset-0 z-40 cursor-pointer"
        onClick={() => props.stateHandler(false)}
      ></div>
    </div>
  );
};

export default ProductGalleryModal;
