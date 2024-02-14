import PdpSkeleton from '@/presentation/components/skeletons/pdp-skeleton/pdp-skeleton';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Pdp = dynamic(() => import('pdp/pdp'), {
  ssr: false,
  loading: () => <PdpSkeleton />,
});

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //Indicates that no page needs be created at build time
    fallback: 'blocking', //Indicates the type of fallback
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const pdp = await import('pdp/pdp');
  if (pdp.getStaticProps) {
    return pdp.getStaticProps(ctx);
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
