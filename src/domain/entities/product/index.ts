import { Product as ProductDS } from '@cencosud-ds/easy-design-system';

export type Product = ProductDS & {
  quantity: number;
  id: string;
};
