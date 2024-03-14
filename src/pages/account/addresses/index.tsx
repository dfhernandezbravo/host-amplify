import { NextPageWithLayout } from '@/pages/_app';
import AccountLayout from '@/presentation/components/layouts/account-layout';
import dynamic from 'next/dynamic';
import React from 'react';

const Page = dynamic(() => import('account/addresses'), {
  ssr: false,
  loading: () => <></>,
});

const AddressesPage: NextPageWithLayout = () => {
  return <Page />;
};

AddressesPage.getLayout = (page) => <AccountLayout>{page}</AccountLayout>;

export default AddressesPage;
