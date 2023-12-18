import dynamic from 'next/dynamic';
// import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import MainLayout from '@/presentation/components/layouts/main-layout';

const Account = () => {
  // const { isLg } = useBreakpoints()

  const Sidebar = dynamic(() => import('account/sidebar'), {
    ssr: false,
    loading: () => <p>loading...</p>,
  });

  return (
    <MainLayout>
      <Sidebar />
    </MainLayout>
  );
};

export default Account;
