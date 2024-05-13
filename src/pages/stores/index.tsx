import HomeSkeleton from '@/presentation/components/skeletons/HomeSkeleton/HomeSkeleton';

import dynamic from 'next/dynamic';

const Stores = dynamic(() => import('home/stores'), {
  ssr: false,
  loading: () => <HomeSkeleton />,
});

const StoresPage = () => {
  return <Stores />;
};

export default StoresPage;
