import { NextPageWithLayout } from '@/pages/_app';
import AccountLayout from '@/presentation/components/layouts/account-layout';
import React from 'react';
import Page from 'account/addresses';

const AddressesPage: NextPageWithLayout = () => {
  return <Page />;
};

AddressesPage.getLayout = (page) => <AccountLayout>{page}</AccountLayout>;

export default AddressesPage;
