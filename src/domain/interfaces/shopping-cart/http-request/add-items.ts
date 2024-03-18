import { PaintingCode } from '@/domain/entities/product';

export type OrderItemAdd = {
  id: string;
  quantity: number;
  paintingCode?: PaintingCode;
};

export interface AddItemsShoppingCartRequest {
  cartId: string;
  orderItems: OrderItemAdd[];
}
