export type CartContextType = {
  cartItems: IProduct[];
  addProduct: (product: IProduct) => void;
  deleteProduct: (productId: string) => void;
};

export interface IProduct {
  id: string;
  title: string;
  value: number;
  description: string;
  amount: number;
  images: string[];
  thumbnails: string[];
  manufacturer: string;
  discount: number;
}

export const productList: IProduct[] = [
  {
    id: (Date.now() + Math.random()).toString(),
    title: 'Fall Limited Edition Sneakers',
    value: 250,
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer',
    amount: 1,
    images: [
      '/images/image-product-1.jpg',
      '/images/image-product-2.jpg',
      '/images/image-product-3.jpg',
      '/images/image-product-4.jpg',
    ],
    thumbnails: [
      '/images/image-product-1-thumbnail.jpg',
      '/images/image-product-2-thumbnail.jpg',
      '/images/image-product-3-thumbnail.jpg',
      '/images/image-product-4-thumbnail.jpg',
    ],
    manufacturer: 'Sneaker company',
    discount: 0.5,
  },
];

export const navigationData = [
  {
    title: 'Collections',
  },
  {
    title: 'Men',
  },
  {
    title: 'Woman',
  },
  {
    title: 'About',
  },
  {
    title: 'Contact',
  },
];
