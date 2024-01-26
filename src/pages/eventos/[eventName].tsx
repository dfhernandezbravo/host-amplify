import MainLayout from '@/presentation/components/layouts/main-layout';
import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-eventos'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

export const getServerSideProps = async (ctx: any) => {
  const plp = await import('plp/plp-eventos');
  if (plp.getServerSideProps) {
    return plp.getServerSideProps(ctx);
  }
  return {
    props: {},
  };
};

const EventsPLPPage = (props: any) => {
  return (
    <MainLayout>
      <Plp {...props} />
    </MainLayout>
  );
};

export default EventsPLPPage;