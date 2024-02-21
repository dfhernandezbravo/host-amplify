import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-cluster'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

const ClusterPLPPage = () => {
  return <Plp />;
};

export default ClusterPLPPage;
