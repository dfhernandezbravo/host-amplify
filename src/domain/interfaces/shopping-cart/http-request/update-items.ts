export type OrderItemUpdate = {
  index: number;
  quantity: number;
};

export interface UpdateItemsShoppingCartRequest {
  cartId: string;
  orderItems: OrderItemUpdate[];
}
