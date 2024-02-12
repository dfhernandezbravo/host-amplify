import { LegalsPaths } from '@/domain/interfaces/legals';
import MainLayout from '@/presentation/components/layouts/main-layout';
import LegalsSidebarSkeleton from '@/presentation/components/skeletons/LegalsSidebarSkeleton';
import LegalsComponents from '@/presentation/modules/LegalsComponents';
import { Container } from '@/presentation/modules/AccountComponents/styles';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const Sidebar = dynamic(() => import('home/Sidebar'), {
  ssr: false,
  loading: () => <LegalsSidebarSkeleton />,
});

const Content = () => {
  const router = useRouter();
  const { content } = router.query;
  const ContentComponent = LegalsComponents[content as LegalsPaths];
  return ContentComponent ? (
    <MainLayout>
      <Container>
        <Sidebar />
        <ContentComponent />
      </Container>
    </MainLayout>
  ) : null;
};

export default Content;
