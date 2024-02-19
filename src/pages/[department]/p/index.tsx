import PdpSkeleton from '@/presentation/components/skeletons/pdp-skeleton/pdp-skeleton';
import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Pdp = dynamic(() => import('pdp/pdp'), {
  ssr: false,
  loading: () => <PdpSkeleton />,
});

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const pdp = await import('pdp/pdp');
  if (pdp.getServerSideProps) {
    return pdp.getServerSideProps(ctx);
  }
  return {
    props: {},
  };
};

const PdpComponent = (props: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('isHeadless', 'true');
    }
  }, []);

  return <Pdp {...props} />;
};

export default PdpComponent;
