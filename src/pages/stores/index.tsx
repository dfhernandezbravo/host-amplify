import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';

import dynamic from 'next/dynamic';

const Stores = dynamic(() => import('home/stores'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

const StoresPage = () => {
  return <Stores />;
};

export default StoresPage;
