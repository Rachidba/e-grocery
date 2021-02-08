import { Category, Product, Subcategory } from '../store/types';
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
