import MainLayout from '@/presentation/components/layouts/main-layout';
import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-cluster'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

const ClusterPLPPage = () => {
  return (
    <MainLayout>
      <Plp />
    </MainLayout>
  );
};

export default ClusterPLPPage;
