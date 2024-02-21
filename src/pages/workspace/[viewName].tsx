import HomeSkeleton from '@/presentation/components/skeletons/HomeSkeleton/HomeSkeleton';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const PrivateWorkspace = dynamic(() => import('home/workspace'), {
  ssr: false,
  loading: () => <HomeSkeleton />,
});

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const landing = await import('home/workspace');
  if (landing?.getServerSideProps) {
    return landing.getServerSideProps(ctx);
  }
  return {
    props: {
      content: [],
    },
  };
};

const LandingPage = (props: any) => {
  return <PrivateWorkspace {...props} />;
};
export default LandingPage;
