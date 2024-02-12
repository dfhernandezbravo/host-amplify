import MainLayout from '@/presentation/components/layouts/main-layout';
import LegalsContentSkeleton from '@/presentation/components/skeletons/LegalsContentSkeleton';
import LegalsSidebarSkeleton from '@/presentation/components/skeletons/LegalsSidebarSkeleton';
import { Container } from '@/presentation/modules/AccountComponents/styles';
import dynamic from 'next/dynamic';
import React from 'react';

const LegalsLayout = dynamic(() => import('home/legals-layout'), {
  ssr: false,
  loading: () => (
    <Container>
      <LegalsSidebarSkeleton />
      <LegalsContentSkeleton />
    </Container>
  ),
});

const Content = () => {
  return (
    <MainLayout>
      <Container>
        <LegalsLayout />
      </Container>
    </MainLayout>
  );
};

export default Content;
