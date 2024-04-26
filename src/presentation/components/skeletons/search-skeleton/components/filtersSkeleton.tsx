import { Layout, Skeleton } from '@cencosud-ds/easy-design-system';

const FiltersSkeleton = () => (
  <Layout is={['Desktop']}>
    <Skeleton
      animation="pulse"
      borderRadius="0.5rem"
      height="auto"
      width="18rem"
    />
  </Layout>
);

export default FiltersSkeleton;
