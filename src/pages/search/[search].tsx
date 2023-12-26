import MainLayout from '@/presentation/components/layouts/main-layout';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-search'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const SearchPLPPage = () => {
  return (
    <MainLayout>
      <Plp />
    </MainLayout>
  );
};

export default SearchPLPPage;
