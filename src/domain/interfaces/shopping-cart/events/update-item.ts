import { OrderItemUpdate } from '../http-request/update-items';

export interface UpdateItemShoppingCartEvent {
  cartId?: string;
  orderItems: OrderItemUpdate[];
}
