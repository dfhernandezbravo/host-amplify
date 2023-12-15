import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import React from 'react';
import dynamic from 'next/dynamic';
import { AccountComponentProps } from '@/@types/account';

const OrderQuoteComponent = dynamic(() => import('account/order-quotation'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const favoritesComponent = dynamic(() => import('account/favorites'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const TargetsComponent = dynamic(() => import('account/cards'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const OrdersComponent = dynamic(() => import('account/orders'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const OrganizationComponent = dynamic(() => import('account/organization'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const ProfileComponent = dynamic(() => import('account/profile'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const AuthenticationComponent = dynamic(
  () => import('account/authentication'),
  {
    ssr: false,
    loading: () => <LogoLoader />,
  },
);
const AddressComponent = dynamic(() => import('account/addresses'), {
  ssr: false,
  loading: () => <LogoLoader />,
});
const PurchasesComponent = dynamic(() => import('account/purchases'), {
  ssr: false,
  loading: () => <LogoLoader />,
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
