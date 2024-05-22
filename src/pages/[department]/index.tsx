import { useRouter } from 'next/router';
import PageNotFound from '../404';
import Landing from 'home/landingN0';

const LandingN0 = () => {
  const router = useRouter();
  if (router?.asPath?.includes('map=ft')) {
    return <PageNotFound />;
  }
  return <Landing />;
};

export default LandingN0;
