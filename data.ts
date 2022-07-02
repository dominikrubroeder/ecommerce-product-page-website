export interface ICartItem {
  id: string;
  title: string;
  value: number;
  amount: number;
  images: string[];
  thumbnails: string[];
  delete: (id: string) => void;
}

export const cartItemsData: ICartItem[] = [
  {
    id: (Date.now() + Math.random()).toString(),
    title: 'Fall Limited Edition Sneakers',
    value: 250,
    amount: 2,
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
    delete: () => {},
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
