/* eslint-disable sonarjs/no-duplicate-string */

import { Product } from '../store/types';

const products: Product[] = [
  {
    id: 1,
    title:
      'Champignons de paille mpignons Champignons de paille mpignonsChampignons de paille mpignons',
    description: 'No available descreption',
    unity: '425g',
    price: 26.8,
    imgUrl: '/img/champignon.jpg',
    subcategoryId: 1,
  },
  {
    id: 2,
    title: 'Lait centrale',
    description: 'No available descreption',
    unity: '0,5L',
    price: 3.4,
    imgUrl: '/img/centrale-lait.jpg',
    subcategoryId: 6,
  },
  {
    id: 3,
    title: 'Yaourt le nature Jaouda',
    description: 'No available descreption',
    unity: '1',
    price: 1.8,
    imgUrl: '/img/jaouda-nature.jpg',
    subcategoryId: 7,
  },
  {
    id: 4,
    title: 'Lait UHT Jaouda',
    description: 'No available descreption',
    unity: '1L',
    price: 8.5,
    imgUrl: '/img/jaouda-uht-1l.png',
    subcategoryId: 6,
  },
  {
    id: 5,
    title: 'Lesieur',
    description: 'No available descreption',
    unity: '5L',
    price: 29,
    imgUrl: '/img/lesieur-5l.png',
    subcategoryId: 9,
  },
  {
    id: 6,
    title: 'La vache qui rit',
    description: 'No available descreption',
    unity: '24',
    price: 26.8,
    imgUrl: '/img/vache-qui-rit.jpg',
    subcategoryId: 5,
  },
];

export default products;
