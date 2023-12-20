import React from 'react';
import dynamic from 'next/dynamic';
import { AccountComponentProps } from '@/@types/account';
import AccountContentSkeleton from '@/presentation/components/atoms/AccountContentSkeleton';
import AccountSidebarSkeleton from '@/presentation/components/atoms/AccountSidebarSkeleton';

const OrderQuoteComponent = dynamic(() => import('account/order-quotation'), {
  ssr: false,
  loading: () => <AccountContentSkeleton />,
});
const favoritesComponent = dynamic(() => import('account/favorites'), {
  ssr: false,
  loading: () => <AccountContentSkeleton />,
});
const TargetsComponent = dynamic(() => import('account/cards'), {
  ssr: false,
  loading: () => <AccountContentSkeleton />,
});
const OrdersComponent = dynamic(() => import('account/orders'), {
  ssr: false,
  loading: () => <AccountContentSkeleton />,
});
const OrganizationComponent = dynamic(() => import('account/organization'), {
  ssr: false,
  loading: () => <AccountContentSkeleton />,
});
const ProfileComponent = dynamic(() => import('account/profile'), {
  ssr: false,
  loading: () => <AccountContentSkeleton />,
});
const AuthenticationComponent = dynamic(
  () => import('account/authentication'),
  {
    ssr: false,
    loading: () => <AccountContentSkeleton />,
  },
);
const AddressComponent = dynamic(() => import('account/addresses'), {
  ssr: false,
  loading: () => <AccountContentSkeleton />,
});
const PurchasesComponent = dynamic(() => import('account/purchases'), {
  ssr: false,
  loading: () => <AccountContentSkeleton />,
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
