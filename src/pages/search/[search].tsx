import MainLayout from '@/presentation/components/layouts/main-layout';
import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import dynamic from 'next/dynamic';

const Plp = dynamic(() => import('plp/plp-search'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

const SearchPLPPage = () => {
  return (
    <MainLayout>
      <Plp />
    </MainLayout>
  );
};

export default SearchPLPPage;
