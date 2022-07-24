export type Product = {
  name: string;
  images: string[];
  category: string;
  price: number;
  review: number;
  outOfStock: boolean;
}

export const forGirlsProducts: Product[] = [
  {
    name: 'White Dress',
    images: [
      '/img/for girls/girls-1-1-580x870.jpg',
      '/img/for girls/girls-1-2-580x870.jpg',
    ],
    category: 'For Girls',
    price: 20,
    review: 4,
    outOfStock: false,
  },
  {
    name: 'Blue Blouse',
    images: [
      '/img/for girls/girls-2-2-580x870.jpg',
      '/img/for girls/girls-2-3-580x870.jpg',
    ],
    category: 'For Girls',
    price: 14,
    review: 5,
    outOfStock: true,
  },
  {
    name: 'Orange Blouse',
    images: [
      '/img/for girls/girls-2-580x870.jpg',
    ],
    category: 'For Girls',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'Orange Blouse',
    images: [
      '/img/for girls/girls-2-580x870.jpg',
    ],
    category: 'For Girls',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'Blue Jacket',
    images: [
      '/img/for girls/girls-3-1-580x870.jpg',
      '/img/for girls/girls-3-2-580x870.jpg',
    ],
    category: 'For Girls',
    price: 25,
    review: 5,
    outOfStock: false,
  },
  {
    name: 'White Blouse',
    images: [
      '/img/for girls/girls-3-580x870.jpg',
    ],
    category: 'For Girls',
    price: 10,
    review: 4,
    outOfStock: true,
  },
  {
    name: 'White and Blue Dress',
    images: [
      '/img/for girls/girls-4-1-580x870.jpg',
      '/img/for girls/girls-4-2-580x870.jpg',
    ],
    category: 'For Girls',
    price: 16,
    review: 3,
    outOfStock: true,
  },
  {
    name: 'Dark Blue Blouse',
    images: [
      '/img/for girls/girls-4-580x870.jpg',
    ],
    category: 'For Girls',
    price: 8,
    review: 4,
    outOfStock: false,
  },
  {
    name: 'Pink Dress',
    images: [
      '/img/for girls/girls-6-1-580x870.jpg',
      '/img/for girls/girls-6-2-580x870.jpg',
    ],
    category: 'For Girls',
    price: 13,
    review: 5,
    outOfStock: false,
  },
];


export const forBoysProducts: Product[] = [
  {
    name: 'Blue Shirt',
    images: [
      '/img/for boys/boys-1-1-580x870.jpg',
      '/img/for boys/boys-1-580x870.jpg',
    ],
    category: 'For Boys',
    price: 20,
    review: 4,
    outOfStock: false,
  },
  {
    name: 'Blue Sweater',
    images: [
      '/img/for boys/boys-2-1-580x870.jpg',
      '/img/for boys/boys-2-580x870.jpg',
    ],
    category: 'For Boys',
    price: 14,
    review: 5,
    outOfStock: true,
  },
  {
    name: 'White T-Shirt',
    images: [
      '/img/for boys/boys-4-1-580x870.jpg',
      '/img/for boys/boys-4-580x870.jpg',
    ],
    category: 'For Boys',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'Blue Jumpsuit',
    images: [
      '/img/for boys/boys-5-1-580x870.jpg',
      '/img/for boys/boys-5-580x870.jpg',
    ],
    category: 'For Boys',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'White Shorts',
    images: [
      '/img/for boys/boys-6-1-580x870.jpg',
      '/img/for boys/boys-6-580x870.jpg',
    ],
    category: 'For Boys',
    price: 25,
    review: 5,
    outOfStock: false,
  },
  {
    name: 'Dark Blue T-Shirt',
    images: [
      '/img/for boys/boys-8-1-580x870.jpg',
      '/img/for boys/boys-8-580x870.jpg',
    ],
    category: 'For Boys',
    price: 10,
    review: 4,
    outOfStock: true,
  },
  {
    name: 'Green Shorts',
    images: [
      '/img/for boys/boys-10-1-580x870.jpg',
      '/img/for boys/boys-10-580x870.jpg',
    ],
    category: 'For Boys',
    price: 16,
    review: 3,
    outOfStock: true,
  },
  {
    name: 'Pink Shirt',
    images: [
      '/img/for boys/boys-11-1-580x870.jpg',
      '/img/for boys/boys-11-580x870.jpg',
    ],
    category: 'For Boys',
    price: 8,
    review: 4,
    outOfStock: false,
  },
  {
    name: 'Orange T-Shirt',
    images: [
      '/img/for boys/boys-8-580x870.jpg',
    ],
    category: 'For Boys',
    price: 13,
    review: 5,
    outOfStock: false,
  },
];


export const forBabiesProducts: Product[] = [
  {
    name: 'Orange',
    images: [
      '/img/for babies/for-babies-1-1-580x870.jpg',
      '/img/for babies/for-babies-1-580x870.jpg',
    ],
    category: 'For Babies',
    price: 20,
    review: 4,
    outOfStock: false,
  },
  {
    name: 'Pink',
    images: [
      '/img/for babies/for-babies-2-1-580x870.jpg',
      '/img/for babies/for-babies-2-580x870.jpg',
    ],
    category: 'For Babies',
    price: 14,
    review: 5,
    outOfStock: true,
  },
  {
    name: 'Pink #2',
    images: [
      '/img/for babies/for-babies-3-1-580x870.jpg',
      '/img/for babies/for-babies-3-580x870.jpg',
    ],
    category: 'For Babies',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'Cream',
    images: [
      '/img/for babies/for-babies-4-1-580x870.jpg',
      '/img/for babies/for-babies-4-580x870.jpg',
    ],
    category: 'For Babies',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'Black',
    images: [
      '/img/for babies/for-babies-5-1-580x870.jpg',
      '/img/for babies/for-babies-5-580x870.jpg',
    ],
    category: 'For Babies',
    price: 25,
    review: 5,
    outOfStock: false,
  },
  {
    name: 'Gray',
    images: [
      '/img/for babies/for-babies-6-1-580x870.jpg',
      '/img/for babies/for-babies-6-580x870.jpg',
    ],
    category: 'For Babies',
    price: 10,
    review: 4,
    outOfStock: true,
  },
  {
    name: 'Pink Shoes',
    images: [
      '/img/for babies/for-babies-7-1-580x870.jpg',
      '/img/for babies/for-babies-7-580x870.jpg',
    ],
    category: 'For Babies',
    price: 16,
    review: 3,
    outOfStock: true,
  },
  {
    name: 'Orange Shirt',
    images: [
      '/img/for babies/for-babies-8-1-580x870.jpg',
      '/img/for babies/for-babies-8-580x870.jpg',
    ],
    category: 'For Babies',
    price: 8,
    review: 4,
    outOfStock: false,
  },
  {
    name: 'Orange Jacket',
    images: [
      '/img/for babies/for-babies-9-1-580x870.jpg',
      '/img/for babies/for-babies-9-580x870.jpg',
    ],
    category: 'For Babies',
    price: 13,
    review: 5,
    outOfStock: false,
  },
];

export const forHomeProducts: Product[] = [
  {
    name: 'Rainbow',
    images: [
      '/img/for home/for-home-1-1-580x870.jpg',
      '/img/for home/for-home-1-580x870.jpg',
    ],
    category: 'For Home',
    price: 20,
    review: 4,
    outOfStock: false,
  },
  {
    name: 'White Bag',
    images: [
      '/img/for home/for-home-2-2-580x870.jpg',
      '/img/for home/for-home-2-580x870.jpg',
    ],
    category: 'For Home',
    price: 14,
    review: 5,
    outOfStock: true,
  },
  {
    name: 'White Bag #2',
    images: [
      '/img/for home/for-home-3-1-580x870.jpg',
      '/img/for home/for-home-3-580x870.jpg',
    ],
    category: 'For Home',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'Letters',
    images: [
      '/img/for home/for-home-4-580x870.jpg',
    ],
    category: 'For Home',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'Orange Bag',
    images: [
      '/img/for home/for-home-5-1-580x870.jpg',
      '/img/for home/for-home-5-580x870.jpg',
    ],
    category: 'For Home',
    price: 25,
    review: 5,
    outOfStock: false,
  },
  {
    name: 'Gray Bear',
    images: [
      '/img/for home/for-home-6-580x870.jpg',
    ],
    category: 'For Home',
    price: 10,
    review: 4,
    outOfStock: true,
  },
  {
    name: 'Letters #2',
    images: [
      '/img/for home/for-home-7-1-580x870.jpg',
      '/img/for home/for-home-7-580x870.jpg',
    ],
    category: 'For Home',
    price: 16,
    review: 3,
    outOfStock: true,
  },
  {
    name: 'Bowl',
    images: [
      '/img/for home/for-home-8-1-580x870.jpg',
      '/img/for home/for-home-8-580x870.jpg',
    ],
    category: 'For Home',
    price: 8,
    review: 4,
    outOfStock: false,
  },
  {
    name: 'Red Bag',
    images: [
      '/img/for home/for-home-10-580x870.jpg',
    ],
    category: 'For Home',
    price: 13,
    review: 5,
    outOfStock: false,
  },
];

export const forPlayProducts: Product[] = [
  {
    name: 'Toy #1',
    images: [
      '/img/for play/toys-1-2-580x870.jpg',
      '/img/for play/toys-1-580x870.jpg',
    ],
    category: 'For Play',
    price: 20,
    review: 4,
    outOfStock: false,
  },
  {
    name: 'Toy #2',
    images: [
      '/img/for play/toys-2-580x870.jpg',
    ],
    category: 'For Play',
    price: 14,
    review: 5,
    outOfStock: true,
  },
  {
    name: 'Toy #3',
    images: [
      '/img/for play/toys-3-580x870.jpg',
    ],
    category: 'For Play',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'Toy #4',
    images: [
      '/img/for play/toys-4-2-580x870.jpg',
      '/img/for play/toys-4-580x870.jpg',
    ],
    category: 'For Play',
    price: 10,
    review: 3,
    outOfStock: false,
  },
  {
    name: 'Toy #5',
    images: [
      '/img/for play/toys-5-580x870.jpg',
    ],
    category: 'For Play',
    price: 25,
    review: 5,
    outOfStock: false,
  },
  {
    name: 'Toy #6',
    images: [
      '/img/for play/toys-6-580x870.jpg',
    ],
    category: 'For Play',
    price: 10,
    review: 4,
    outOfStock: true,
  },
];