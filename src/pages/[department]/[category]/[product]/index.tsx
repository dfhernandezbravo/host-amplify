import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-product'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

const PlpProduct = () => {
  return <Plp />;
};

export default PlpProduct;
