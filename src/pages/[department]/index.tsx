import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PageNotFound from '../404';

const Landing = dynamic(() => import('home/landingN0'), {
  ssr: false,
  loading: () => <></>,
});

const LandingN0 = () => {
  const router = useRouter();
  return (
    <>{router?.asPath?.includes('map=ft') ? <PageNotFound /> : <Landing />}</>
  );
};

export default LandingN0;
