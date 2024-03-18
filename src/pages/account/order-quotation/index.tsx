import { NextPageWithLayout } from '@/pages/_app';
import AccountLayout from '@/presentation/components/layouts/account-layout';
import dynamic from 'next/dynamic';
import React from 'react';

const PageRemote = dynamic(() => import('account/order-quotation'), {
  ssr: false,
  loading: () => <></>,
});

const Page: NextPageWithLayout = () => {
  return <PageRemote />;
};

Page.getLayout = (page) => <AccountLayout>{page}</AccountLayout>;

export default Page;
