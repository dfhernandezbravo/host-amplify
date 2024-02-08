import { Product } from '@/domain/entities/product';

export interface AddItemShoppingCartEvent {
  cartId?: string;
  product: Product;
}
