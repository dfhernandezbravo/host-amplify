import { Product } from '@cencosud-ds/easy-design-system';

export type ProductEvent = Pick<
  Product,
  'imageUrl' | 'productName' | 'productId' | 'brand' | 'prices'
> & { quantity: number };

export interface AddItemShoppingCartEvent {
  cartId?: string;
  product: ProductEvent;
}
