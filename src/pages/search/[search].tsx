import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-search'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

const SearchPLPPage = () => {
  return <Plp />;
};

export default SearchPLPPage;
