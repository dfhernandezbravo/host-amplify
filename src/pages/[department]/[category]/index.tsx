import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import { GetServerSideProps } from 'next';

import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-category'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const plp = await import('plp/plp-category');
  if (plp?.getServerSideProps) {
    return plp.getServerSideProps(ctx);
  }
  return {
    props: {},
  };
};

const PlpCategory = (props: any) => {
  return <Plp {...props} />;
};

export default PlpCategory;
