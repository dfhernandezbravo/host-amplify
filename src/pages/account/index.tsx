import MainLayout from '@/presentation/components/layouts/main-layout';
import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import useSidebarContent from '@/presentation/hooks/useSidebarContent';
import { useDevice } from '@cencosud-ds/easy-design-system';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const AccountLayout = dynamic(() => import('account/account-layout'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

export const ROOT_PATH = 'account';
const GROUP_NAME = 'account';
const PARAM_NAME = 'sidebar';

const Account = () => {
  const { device } = useDevice();

  const router = useRouter();
  const { data, error, loading } = useSidebarContent(GROUP_NAME, PARAM_NAME);

  if ((!loading && !data) || loading) {
    return <LogoLoader />;
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
      <AccountLayout />
    </MainLayout>
  );
};

export default Account;
