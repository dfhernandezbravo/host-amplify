import { ShoppingCart } from '@cencosud-ds/easy-design-system';
import { AxiosResponse } from 'axios';
import { AddItemsShoppingCartRequest } from '../http-request/add-items';
import { GetShoppingCartIdResponse } from '../http-request/get-shopping-cart-id';
import { UpdateItemsShoppingCartRequest } from '../http-request/update-items';
import { Customer } from '@/domain/entities/customer';

export interface ShoppingCartService {
  getShoppingCartId(): Promise<AxiosResponse<GetShoppingCartIdResponse>>;

  getShoppingCart(cartId: string): Promise<AxiosResponse<ShoppingCart>>;

  addItemShoppingCart(
    request: AddItemsShoppingCartRequest,
  ): Promise<AxiosResponse<ShoppingCart>>;

  updateItemShoppingCart(
    request: UpdateItemsShoppingCartRequest,
  ): Promise<AxiosResponse<ShoppingCart>>;

  removeItemShoppingCart(
    cartId: string,
    itemIndex: number,
  ): Promise<AxiosResponse<ShoppingCart>>;

  removeAllItemsShoppingCart(
    cartId: string,
  ): Promise<AxiosResponse<ShoppingCart>>;

  updateCustomer(
    cartId: string,
    customer: Customer,
  ): Promise<AxiosResponse<ShoppingCart>>;
}
