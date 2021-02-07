import { Category } from './../store/types';

const categories: Category[] = [
  {
    id: 1,
    categoryName: 'Conserves',
    subcategories: [
      { id: 1, subcategoryName: 'Champignons' },
      { id: 2, subcategoryName: 'Macedoine, petits poins' },
      { id: 3, subcategoryName: 'Mais,coeur de palmier' },
      { id: 4, subcategoryName: 'Autres' },
    ],
  },
  {
    id: 2,
    categoryName: 'Produts laitiers',
    subcategories: [
      { id: 5, subcategoryName: 'Fromages et cremes fraiches' },
      { id: 6, subcategoryName: 'Laits et boissons vegetales' },
      { id: 7, subcategoryName: 'Yaourts et desserts' },
    ],
  },
  {
    id: 3,
    categoryName: 'Huiles et vinaigres',
    subcategories: [
      { id: 8, subcategoryName: "Huiles d'olive, d'argan, autres " },
      { id: 9, subcategoryName: 'Huiles de cuisson' },
      { id: 10, subcategoryName: 'Vinaigres' },
    ],
  },
];

export default categories;
