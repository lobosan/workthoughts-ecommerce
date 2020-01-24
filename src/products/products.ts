import * as uuid from 'uuid/v1';
import { Product } from './product.model';

export const products: Product[] = [
  {
    id: uuid(),
    price: 24.99,
    productCode: 'CHAIR_RED',
    name: 'Red plastic chair',
  },
  {
    id: uuid(),
    price: 24.99,
    productCode: 'DIS_10-CHAIR_BLUE',
    name: 'Blue plastic chair',
  },
  {
    id: uuid(),
    price: 24.99,
    productCode: 'CHAIR_WHITE',
    name: 'White plastic chair',
  },
  {
    id: uuid(),
    price: 24.99,
    productCode: 'STOOL_WHITE',
    name: 'White plastic footstool',
  },
  {
    id: uuid(),
    price: 24.99,
    productCode: 'DIS_15-STOOL_GREEN',
    name: 'Green plastic footstool',
  },
  {
    id: uuid(),
    price: 74.99,
    productCode: 'DIS_15-STOOL_GREEN',
    name: 'Wooden computer desk',
  },
  {
    id: uuid(),
    price: 129.99,
    productCode: 'COMP_CHAIR',
    name: 'Computer swivel chair',
  },
  {
    id: uuid(),
    price: 249.99,
    productCode: 'BOARD_TABLE',
    name: '12-person boardroom table',
  },
  {
    id: uuid(),
    price: 99.99,
    productCode: 'BOARD_CHAIR',
    name: 'Boardroom chair',
  },
];
