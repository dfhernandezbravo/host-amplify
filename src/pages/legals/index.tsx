import MainLayout from '@/presentation/components/layouts/main-layout';
import LegalsSidebarSkeleton from '@/presentation/components/skeletons/LegalsSidebarSkeleton';
import useSidebarContent from '@/presentation/hooks/useSidebarContent';
import { useDevice } from '@cencosud-ds/easy-design-system';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ComponentType } from 'react';

const Sidebar: ComponentType<{ display: string }> = dynamic(
  () => import('home/Sidebar'),
  {
    ssr: false,
    loading: () => <LegalsSidebarSkeleton />,
  },
);

export const ROOT_PATH = 'legals';

const Legals = () => {
  const { device } = useDevice();

  const router = useRouter();
  const { data, error, loading } = useSidebarContent();

  if ((!loading && !data) || loading) {
    return <LegalsSidebarSkeleton />;
  }

  if (device !== 'Phone' && data) {
    const routeByDefault = data.value.find((route) => route.isDefault);
    router.push(
      `/${ROOT_PATH}/${routeByDefault!.redirect.url || 'terms-and-conditions'}`,
    );
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

export default Legals;
