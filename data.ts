export interface ICartItem {
  id: string;
  title: string;
  value: number;
  amount: number;
  images: string[];
  thumbnails: string[];
}

export const cartItemsData: ICartItem[] = [
  {
    id: (Date.now() + Math.random()).toString(),
    title: 'Fall Limited Edition Sneakers',
    value: 250,
    amount: 2,
    images: [
      '/image/image-product-1.jpg',
      '/image/image-product-2.jpg',
      '/image/image-product-3.jpg',
      '/image/image-product-4.jpg',
    ],
    thumbnails: [
      '/image/image-product-1-thumbnail.jpg',
      '/image/image-product-2-thumbnail.jpg',
      '/image/image-product-3-thumbnail.jpg',
      '/image/image-product-4-thumbnail.jpg',
    ],
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
