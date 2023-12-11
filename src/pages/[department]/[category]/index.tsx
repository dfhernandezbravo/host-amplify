import MainLayout from '@/presentation/components/layouts/main-layout';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';
import React from 'react';

const Plp = dynamic(() => import('plp/plp'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const PlpPage = () => {
  return (
    <MainLayout>
      <Plp />
    </MainLayout>
  );
};

export default PlpPage;
