import bffPublicClient from '@/application/data-source/bff-public-instance';
import { ShoppingCartService } from '@/domain/interfaces/shopping-cart/http-service';

const httpInstance = bffPublicClient;

const shoppingCartService: ShoppingCartService = {
  getShoppingCartId: () => httpInstance.get('/shoppingcart'),

  getShoppingCart: (cartId) => httpInstance.get(`/shoppingcart/${cartId}`),

  addItemShoppingCart: ({ cartId, orderItems }) =>
    httpInstance.post(`/shoppingcart/${cartId}/items`, { orderItems }),

  updateItemShoppingCart: ({ cartId, orderItems }) =>
    httpInstance.patch(`/shoppingcart/${cartId}/items`, { orderItems }),

  removeItemShoppingCart: (cartId, itemIndex) =>
    httpInstance.delete(`/shoppingcart/${cartId}/items/${itemIndex}`),

  removeAllItemsShoppingCart: (cartId) =>
    httpInstance.delete(`/shoppingcart/${cartId}/items`),
};

export default shoppingCartService;
