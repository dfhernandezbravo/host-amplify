import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-product'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const plp = await import('plp/plp-product');
  if (plp.getServerSideProps) {
    return plp.getServerSideProps(ctx);
  }
  return {
    props: {},
  };
};

const PlpProduct = (props: any) => {
  return <Plp {...props} />;
};

export default PlpProduct;
