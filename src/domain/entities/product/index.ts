import { Product as ProductDS } from '@cencosud-ds/easy-design-system';

export type PaintingCode = {
  code: string;
  hexColor: string;
  quantity: number;
};

export type Product = ProductDS & {
  quantity: number;
  id: string;
  paintingCode: PaintingCode;
};
