import dynamic from 'next/dynamic';
import MainLayout from '@/presentation/components/layouts/main-layout';

const Landing = dynamic(() => import('home/landingN0'), {
  ssr: false,
  loading: () => <></>,
});

const LandingN0 = () => {
  return (
    <MainLayout>
      <Landing />
    </MainLayout>
  );
};
export default LandingN0;
