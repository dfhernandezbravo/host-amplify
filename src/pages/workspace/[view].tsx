import dynamic from 'next/dynamic';
import HomeSkeleton from '@/presentation/components/skeletons/HomeSkeleton/HomeSkeleton';
import MainLayout from '@/presentation/components/layouts/main-layout';

const PrivateWorkspace = dynamic(() => import('home/privatelanding'), {
  ssr: false,
  loading: () => <HomeSkeleton />,
});

const LandingPage = () => {
  return (
    <MainLayout>
      <PrivateWorkspace />
    </MainLayout>
  );
};
export default LandingPage;
