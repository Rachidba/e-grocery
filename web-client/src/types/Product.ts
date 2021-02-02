export interface Product {
  id: number;
  title: string;
  description: string;
  unity: string;
  price: number;
  imgUrl: string;
}

export const emptyProduct = {
  id: -1,
  title: '',
  description: '',
  unity: '',
  price: 0,
  imgUrl: '',
};
