import MainLayout from '@/presentation/components/layouts/main-layout';
import PdpSkeleton from '@/presentation/components/skeletons/pdp-skeleton/pdp-skeleton';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Pdp = dynamic(() => import('pdp/pdp'), {
  ssr: false,
  loading: () => <PdpSkeleton />,
});

const PdpComponent = (props: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('isHeadless', 'true');
    }
  }, []);

  return (
    <MainLayout>
      <Pdp {...props} />
    </MainLayout>
  );
};

export default PdpComponent;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const pdp = await import('pdp/pdp');
  if (pdp.getStaticProps) {
    return pdp.getStaticProps(ctx);
  }
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};
