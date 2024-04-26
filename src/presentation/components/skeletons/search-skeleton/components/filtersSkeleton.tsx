import Skeleton from '@/presentation/components/atoms/skeleton';
import Layout from '@/presentation/components/layouts/layout';

const FiltersSkeleton = () => (
  <Layout is={['Desktop']}>
    <Skeleton
      animationtype="pulse"
      radius="0.5rem"
      height="auto"
      width="18rem"
    />
  </Layout>
);

export default FiltersSkeleton;
