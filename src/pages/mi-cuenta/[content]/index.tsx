import { useRouter } from 'next/router';
import React from 'react';
import AccountComponents from '@/presentation/modules/AccountComponents';
import { AccountPaths } from '@/@types/account';
import MainLayout from '@/presentation/components/layouts/main-layout';

const Content = () => {
  const router = useRouter();
  const { content } = router.query;
  const ContentComponent = AccountComponents[content as AccountPaths];
  return ContentComponent ? (
    <MainLayout>
      <ContentComponent />
    </MainLayout>
  ) : null;
};

export default Content;
