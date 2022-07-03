import Image from 'next/image';
import React, { useState } from 'react';
import { IProduct } from '../../data';
import ProductGalleryModal from './ProductGalleryModal';

interface ProductGalleryProps {
  product: IProduct;
}

const ProductGallery: React.FC<ProductGalleryProps> = (props) => {
  const product = props.product;
  const [activeImage, setActiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid gap-8 max-w">
      <Image
        width={640}
        height={640}
        src={props.product.images[activeImage]}
        alt={props.product.title}
        className="hover:cursor-zoom-in sm:rounded-xl"
        onClick={() => setShowModal(true)}
      />

      {showModal && (
        <ProductGalleryModal
          product={product}
          activeImage={activeImage}
          stateHandler={setShowModal}
        />
      )}

      <nav className="hidden md:block">
        <ul className="flex items-center justify-between gap-2">
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
