import dynamic from 'next/dynamic';
import MainLayout from '@/presentation/components/layouts/main-layout';
import { useRouter } from 'next/router';

const Landing = dynamic(() => import('home/landingN0'), {
  ssr: false,
  loading: () => <></>,
});
import PageNotFound from '../404';

const LandingN0 = () => {
  const router = useRouter();
  return (
    <>
      {router?.asPath?.includes('map=ft') ? (
        <PageNotFound />
      ) : (
        <MainLayout>
          <Landing />
        </MainLayout>
      )}
    </>
  );
};
export default LandingN0;
