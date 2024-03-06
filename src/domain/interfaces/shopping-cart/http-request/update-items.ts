import { PaintingCode } from '@/domain/entities/product';

export type OrderItemUpdate = {
  index: number;
  quantity: number;
  paintingCode?: PaintingCode;
};

export interface UpdateItemsShoppingCartRequest {
  cartId: string;
  orderItems: OrderItemUpdate[];
}
