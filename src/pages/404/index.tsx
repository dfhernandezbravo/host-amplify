import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-not-found'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

const PageNotFound = () => {
  return <Plp />;
};
export default PageNotFound;
