import Image from 'next/image';
import React, { useState } from 'react';
import { IProduct } from '../data';

interface ProductGalleryProps {
  product: IProduct;
}

const ProductGallery: React.FC<ProductGalleryProps> = (props) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="grid gap-8">
      <Image
        width={500}
        height={500}
        src={props.product.images[activeImage]}
        alt={props.product.title}
        className="rounded-xl"
      />

      <nav className="hidden md:block">
        <ul className="flex items-center justify-between gap-2">
          {props.product.thumbnails.map((thumbnail, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => setActiveImage(index)}
            >
              <Image
                src={thumbnail}
                width={100}
                height={100}
                alt={props.product.title}
                className="rounded-xl"
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProductGallery;
