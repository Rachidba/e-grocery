import { Category } from './../store/types';

const categories: Category[] = [
  {
    id: 1,
    subcategories: [
      {
        id: 1,
        subcategoryName: 'Laits',
      },
      {
        id: 2,
        subcategoryName: 'Jus de fruits au lait, Yaourt, Dessert',
      },
      {
        id: 3,
        subcategoryName: 'œufs Beurres et Crémes',
      },
      {
        id: 4,
        subcategoryName: 'Fromages Charcuterie et snaking',
      },
    ],
    categoryName: 'Produits Frais',
  },
  {
    id: 2,
    subcategories: [
      {
        id: 5,
        subcategoryName: 'Café',
      },
      {
        id: 6,
        subcategoryName: 'Céréales',
      },
      {
        id: 7,
        subcategoryName: 'Chocolats et laits en poudre',
      },
      {
        id: 8,
        subcategoryName: 'Confitures, Miels, pates à tartiner',
      },
      {
        id: 9,
        subcategoryName: 'Thés et infusions',
      },
    ],
    categoryName: 'Petit dejeuner',
  },
  {
    id: 3,
    subcategories: [
      {
        id: 10,
        subcategoryName: 'Conserves',
      },
      {
        id: 11,
        subcategoryName: 'Farine, et produit de la patisserie',
      },
      {
        id: 12,
        subcategoryName: 'Huilles et vinaigres',
      },
      {
        id: 13,
        subcategoryName: 'Pates, Riz, Féculents',
      },
      {
        id: 14,
        subcategoryName: 'Sucres',
      },
      {
        id: 15,
        subcategoryName: 'Sauces, Epices et bouillons',
      },
    ],
    categoryName: 'Epicerie',
  },
  {
    id: 4,
    subcategories: [
      {
        id: 16,
        subcategoryName: 'Chips',
      },
      {
        id: 17,
        subcategoryName: 'Biscuit, Madelenes, Gaufrettes',
      },
      {
        id: 18,
        subcategoryName: 'Bonbons, Shewing-gums',
      },
      {
        id: 19,
        subcategoryName: 'Chocolats et caramels',
      },
    ],
    categoryName: 'Biscuitrie et Snaking',
  },
  {
    id: 5,
    subcategories: [
      {
        id: 20,
        subcategoryName: 'Shampoings, Gels douche, Savons,',
      },
      {
        id: 21,
        subcategoryName: 'Hygiéne et soins',
      },
      {
        id: 22,
        subcategoryName: 'Papiers et Mouchoires',
      },
    ],
    categoryName: 'Hygiéne, Entretien, Nettoyage',
  },
  {
    id: 6,
    subcategories: [
      {
        id: 23,
        subcategoryName: 'Eaux et sirop',
      },
      {
        id: 24,
        subcategoryName: 'jus de fruits',
      },
      {
        id: 25,
        subcategoryName: 'Soda et boisons energitiques',
      },
    ],
    categoryName: 'eaux et boisons',
  },
];

export default categories;
