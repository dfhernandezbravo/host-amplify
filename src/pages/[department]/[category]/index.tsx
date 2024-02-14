import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';

import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-category'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

export const getServerSideProps = async (ctx: any) => {
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
