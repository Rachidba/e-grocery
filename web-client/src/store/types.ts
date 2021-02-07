export interface Product {
  id: number;
  title: string;
  description: string;
  unity: string;
  price: number;
  imgUrl: string;
  subcategoryId: number;
}

export interface Category {
  id: number;
  categoryName: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: number;
  subcategoryName: string;
}

export const emptyProduct = {
  id: -1,
  title: '',
  description: '',
  unity: '',
  price: 0,
  imgUrl: '',
};
