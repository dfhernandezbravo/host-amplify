import MainLayout from '@/presentation/components/layouts/main-layout';
import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';
import React from 'react';

const AccountLayout = dynamic(() => import('account/account-layout'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const Content = () => (
  <MainLayout>
    <AccountLayout />
  </MainLayout>
);

export default Content;
