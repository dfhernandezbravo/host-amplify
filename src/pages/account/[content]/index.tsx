import { AccountPaths } from '@/domain/interfaces/account';
import MainLayout from '@/presentation/components/layouts/main-layout';
import AccountSidebarSkeleton from '@/presentation/components/skeletons/AccountSidebarSkeleton';
import AccountComponents from '@/presentation/modules/AccountComponents';
import { Container } from '@/presentation/modules/AccountComponents/styles';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const Sidebar = dynamic(() => import('account/sidebar'), {
  ssr: false,
  loading: () => <AccountSidebarSkeleton />,
});

const Content = () => {
  const router = useRouter();
  const { content } = router.query;
  const ContentComponent = AccountComponents[content as AccountPaths];
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
