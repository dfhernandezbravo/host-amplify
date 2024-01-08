import { ComponentType } from 'react';

export type AccountPaths =
  | 'order-quotation'
  | 'favorites'
  | 'cards'
  | 'orders'
  | 'organization'
  | 'profile'
  | 'authentication'
  | 'addresses'
  | 'purchases'
  | 'bank-account';

export type AccountComponentProps = {
  [key in AccountPaths]: ComponentType<{}>;
};
