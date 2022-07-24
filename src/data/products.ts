export type Product = {
  id: string;
  name: string;
  images: string[];
  category: string;
  price: number;
  review: number;
  outOfStock: boolean;
}

export const forGirlsProducts: Product[] = [
  {
    id: '001',
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
    id: '002',
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
    id: '003',
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
    id: '004',
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
    id: '005',
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
    id: '006',
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
    id: '007',
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
    id: '008',
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
    id: '009',
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
    id: '010',
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
    id: '011',
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
    id: '012',
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
    id: '013',
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
    id: '014',
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
    id: '015',
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
    id: '016',
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
    id: '017',
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
    id: '018',
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
    id: '019',
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
    id: '020',
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
    id: '021',
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
    id: '022',
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
    id: '023',
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
    id: '024',
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
    id: '025',
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
    id: '026',
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
    id: '027',
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
    id: '028',
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
    id: '029',
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
    id: '030',
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
    id: '031',
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
    id: '032',
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
    id: '033',
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
    id: '034',
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
    id: '035',
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
    id: '036',
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
    id: '037',
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
    id: '038',
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
    id: '039',
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
    id: '040',
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
    id: '041',
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
    id: '042',
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