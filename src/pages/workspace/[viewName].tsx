import { GetServerSideProps } from 'next';
import PrivateWorkspace from 'home/workspace';

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
