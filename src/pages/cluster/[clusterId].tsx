import MainLayout from '@/presentation/components/layouts/main-layout';
import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-cluster'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const ClusterPLPPage = () => {
  return (
    <MainLayout>
      <Plp />
    </MainLayout>
  );
};

export default ClusterPLPPage;
