import { Category, Product, Subcategory, Shop } from '../store/types';
import categories from './mockCategories';
import products from './mockProducts';

export function getProducts(): Product[] {
  return products;
}

export function getCategories(): Category[] {
  return categories;
}

export function getSubcategories(
  categoryId: number,
): Subcategory[] | undefined {
  return categories.find((category) => category.id == categoryId)
    ?.subcategories;
}

export function getProductsBySubcategory(subcategoryId: number): Product[] {
  return products.filter((p) => p.subcategoryId == subcategoryId);
}

export function getShops(): Shop[] {
  return [
    {
      id: 1,
      name: 'SuperBrahim',
      imgUrl: 'http://via.placeholder.com/640x360',
      geom: {
        latitude: 33.58026,
        longitude: -7.63022,
      },
      distance: 23.4,
    },
    {
      id: 2,
      name: 'MiniBrahim',
      imgUrl: 'http://via.placeholder.com/640x360',
      geom: {
        latitude: 33.573109,
        longitude: -7.63022,
      },
      distance: 50,
    },
    {
      id: 3,
      name: 'Hanouti',
      imgUrl: 'http://via.placeholder.com/640x365',
      geom: {
        latitude: 33.59715,
        longitude: -7.63515,
      },
      distance: 100,
    },
  ];
}
