import { AccountComponentProps } from '@/domain/interfaces/account';
import AccountContentSkeleton from '@/presentation/components/skeletons/AccountContentSkeleton';
import dynamic from 'next/dynamic';
import React from 'react';

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
const BankAccount = dynamic(() => import('account/bank-account'), {
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
  'bank-account': BankAccount,
};

export default AccountComponents;
