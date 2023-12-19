import dynamic from 'next/dynamic';
import MainLayout from '@/presentation/components/layouts/main-layout';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import useSidebarContent from '@/presentation/hooks/useSidebarContent';
import { useRouter } from 'next/router';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import { ComponentType } from 'react';

const Sidebar: ComponentType<{ display: string }> = dynamic(
  () => import('account/sidebar'),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  },
);

export const ROOT_PATH = 'account';

const Account = () => {
  const router = useRouter();
  const { active } = useBreakpoints();
  const { data, error, loading } = useSidebarContent();

  if ((loading && !data) || loading) {
    return <LogoLoader />;
  }

  if (active !== 'xs' && data) {
    const routeByDefault = data.value.find((route) => route.isDefault);
    router.push(`/${ROOT_PATH}/${routeByDefault!.redirect.url}`);
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
