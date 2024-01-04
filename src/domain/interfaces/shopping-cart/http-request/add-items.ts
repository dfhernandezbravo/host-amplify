export type OrderItemAdd = {
  id: string;
  quantity: number;
};

export interface AddItemsShoppingCartRequest {
  cartId: string;
  orderItems: OrderItemAdd[];
}
