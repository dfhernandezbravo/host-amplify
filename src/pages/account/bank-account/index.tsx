import { NextPageWithLayout } from '@/pages/_app';
import AccountLayout from '@/presentation/components/layouts/account-layout';
import React from 'react';
import PageRemote from 'account/bank-account';

const Page: NextPageWithLayout = () => {
  return <PageRemote />;
};

Page.getLayout = (page) => <AccountLayout>{page}</AccountLayout>;

export default Page;
