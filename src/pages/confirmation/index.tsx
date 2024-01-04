import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';

const Confirmation = dynamic(() => import('confirmation/confirmation'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const ConfirmationPage = () => {
  return <Confirmation />;
};

export default ConfirmationPage;
