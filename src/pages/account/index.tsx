import dynamic from 'next/dynamic';
import MainLayout from '@/presentation/components/layouts/main-layout';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useSidebarContent from '@/presentation/hooks/useSidebarContent';
import { useRouter } from 'next/router';
import { ComponentType } from 'react';
import AccountSidebarSkeleton from '@/presentation/components/atoms/AccountSidebarSkeleton';
import { useDevice } from '@cencosud-ds/easy-design-system';

const Sidebar: ComponentType<{ display: string }> = dynamic(
  () => import('account/sidebar'),
  {
    ssr: false,
    loading: () => <AccountSidebarSkeleton />,
  },
);

export const ROOT_PATH = 'account';

const Account = () => {
  const { device } = useDevice();

  const router = useRouter();
  const { data, error, loading } = useSidebarContent();

  if ((!loading && !data) || loading) {
    return <AccountSidebarSkeleton />;
  }

  if (device !== 'Phone' && data) {
    const routeByDefault = data.value.find((route) => route.isDefault);
    router.push(`/${ROOT_PATH}/${routeByDefault!.redirect.url || 'profile'}`);
    return null;
  }

  if (error) {
    <p>Ocurrió un error</p>;
  }

  return (
    <MainLayout>
      <Sidebar display="block" />
    </MainLayout>
  );
};

export default Account;
