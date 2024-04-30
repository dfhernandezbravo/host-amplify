import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';

import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-category'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

const PlpCategory = () => {
  return <Plp />;
};

export default PlpCategory;
