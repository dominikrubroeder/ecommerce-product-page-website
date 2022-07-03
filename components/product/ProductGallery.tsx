import Image from 'next/image';
import React, { useState } from 'react';
import { IProduct } from '../../data';
import NextArrow from '../slider/NextArrow';
import PreviousArrow from '../slider/PreviousArrow';
import ProductGalleryModal from './ProductGalleryModal';

interface ProductGalleryProps {
  product: IProduct;
}

const ProductGallery: React.FC<ProductGalleryProps> = (props) => {
  const product = props.product;
  const [activeImage, setActiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openProductGalleryModal = () => {
    if (window.innerWidth < 640) return;

    setShowModal(true);
  };

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
    <div className="grid sm:gap-4">
      <div className="relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 sm:hidden">
          <PreviousArrow onClick={previousImageHandler} />
        </div>

        <Image
          width={640}
          height={640}
          src={props.product.images[activeImage]}
          alt={props.product.title}
          className="sm:hover:cursor-zoom-in sm:rounded-xl"
          onClick={openProductGalleryModal}
        />

        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 sm:hidden">
          <NextArrow onClick={nextImageHandler} />
        </div>
      </div>

      {showModal && (
        <ProductGalleryModal
          product={product}
          activeImage={activeImage}
          stateHandler={setShowModal}
        />
      )}

      <nav className="hidden sm:block">
        <ul className="flex items-center gap-4 lg:justify-between">
          {props.product.thumbnails.map((thumbnail, index) => (
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
                alt={props.product.title}
                className="rounded-lg"
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProductGallery;
