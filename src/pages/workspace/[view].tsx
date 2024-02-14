import HomeSkeleton from '@/presentation/components/skeletons/HomeSkeleton/HomeSkeleton';
import dynamic from 'next/dynamic';

const PrivateWorkspace = dynamic(() => import('home/privatelanding'), {
  ssr: false,
  loading: () => <HomeSkeleton />,
});

const LandingPage = () => {
  return <PrivateWorkspace />;
};
export default LandingPage;
