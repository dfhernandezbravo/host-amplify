import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';

const AccountLayout = dynamic(() => import('account/account-layout'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const Content = () => <AccountLayout />;

export default Content;
