import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PageNotFound from '../404';

const Landing = dynamic(() => import('home/landingN0'), {
  ssr: false,
  loading: () => <></>,
});

export const getServerSideProps = async (ctx: any) => {
  const landing = await import('home/landingN0');
  if (landing?.getServerSideProps) {
    return landing.getServerSideProps(ctx);
  }
  return {
    props: {},
  };
};

const LandingN0 = (props: any) => {
  const router = useRouter();
  return (
    <>
      {router?.asPath?.includes('map=ft') ? (
        <PageNotFound />
      ) : (
        <Landing {...props} />
      )}
    </>
  );
};

export default LandingN0;
