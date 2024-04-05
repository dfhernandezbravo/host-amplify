import { Layout, Skeleton } from '@cencosud-ds/easy-design-system';

const HeaderSkeleton = () => {
  return (
    <>
      <Layout is={['Desktop']}>
        <Skeleton height="145px" width="100%" animation="wave" />
      </Layout>
      <Layout is={['Phone', 'Tablet']}>
        <Skeleton height="125px" width="100%" animation="wave" />
      </Layout>
      <br />
    </>
  );
};

export default HeaderSkeleton;
