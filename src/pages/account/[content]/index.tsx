import { useRouter } from 'next/router';
import React from 'react';
import AccountComponents from '@/presentation/modules/AccountComponents';
import { AccountPaths } from '@/@types/account';
import MainLayout from '@/presentation/components/layouts/main-layout';
import dynamic from 'next/dynamic';
import { Container } from '@/presentation/modules/AccountComponents/styles';

const Sidebar = dynamic(() => import('account/sidebar'), {
  ssr: false,
  loading: () => <p>loading...</p>,
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
