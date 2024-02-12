import bffPrivateClient from '@/application/data-source/bff-private-instance';
import { ShoppingCartService } from '@/domain/interfaces/shopping-cart/http-service';
import Cookies from 'universal-cookie';
import { AUTHCOOKIES } from '@/application/infra/cookies';

const httpInstance = bffPrivateClient;
const cookies = new Cookies();
const accessToken = cookies.get(AUTHCOOKIES.ACCESS_TOKEN);

const shoppingCartService: ShoppingCartService = {
  getShoppingCartId: () => accessToken && httpInstance.get('/shoppingcart'),

  getShoppingCart: (cartId) =>
    accessToken && httpInstance.get(`/shoppingcart/${cartId}`),

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
