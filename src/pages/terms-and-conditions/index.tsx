import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';

const TermsAndConditions = dynamic(() => import('home/terms-and-conditions'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const termsAndConditions = await import('home/terms-and-conditions');
  if (termsAndConditions.getStaticProps) {
    return termsAndConditions.getStaticProps(ctx);
  }
  return {
    props: {},
  };
};

const TermsAndConditionsPage = (props: any) => {
  return <TermsAndConditions {...props} />;
};

export default TermsAndConditionsPage;
