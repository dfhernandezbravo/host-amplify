import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import React from 'react';
import dynamic from 'next/dynamic';
import { AccountComponentProps } from '@/@types/account';

const OrderQuoteComponent = dynamic(() => import('account/order-quotation'), {
  ssr: false,
  loading: () => <p>loading...</p>,
});
const favoritesComponent = dynamic(() => import('account/favorites'), {
  ssr: false,
  loading: () => <p>loading...</p>,
});
const TargetsComponent = dynamic(() => import('account/cards'), {
  ssr: false,
  loading: () => <p>loading...</p>,
});
const OrdersComponent = dynamic(() => import('account/orders'), {
  ssr: false,
  loading: () => <p>loading...</p>,
});
const OrganizationComponent = dynamic(() => import('account/organization'), {
  ssr: false,
  loading: () => <p>loading...</p>,
});
const ProfileComponent = dynamic(() => import('account/profile'), {
  ssr: false,
  loading: () => <p>loading...</p>,
});
const AuthenticationComponent = dynamic(
  () => import('account/authentication'),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  },
);
const AddressComponent = dynamic(() => import('account/addresses'), {
  ssr: false,
  loading: () => <p>loading...</p>,
});
const PurchasesComponent = dynamic(() => import('account/purchases'), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

const AccountComponents: AccountComponentProps = {
  'order-quotation': OrderQuoteComponent,
  favorites: favoritesComponent,
  cards: TargetsComponent,
  orders: OrdersComponent,
  organization: OrganizationComponent,
  profile: ProfileComponent,
  authentication: AuthenticationComponent,
  addresses: AddressComponent,
  purchases: PurchasesComponent,
};

export default AccountComponents;
