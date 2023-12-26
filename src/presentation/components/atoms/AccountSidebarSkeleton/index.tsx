import React, { FC } from 'react';
import { Layout, Skeleton } from '@cencosud-ds/easy-design-system';
import { Box, SkeletonContainer } from './index.styles';

const CustomSkeleton: FC<{
  $w?: number;
  $h?: number;
  $m?: string;
  $b?: string;
}> = ({ ...props }) => (
  <SkeletonContainer {...props}>
    <Skeleton animation="wave" />
  </SkeletonContainer>
);

const AccountSidebarSkeleton = () => {
  return (
    <>
      <Layout is={['Desktop', 'Tablet']}>
        <Box>
          <CustomSkeleton $w={233.594} $h={19} $m="22px 17px 4px 0" />
          <CustomSkeleton $w={233.594} $h={24} $m="0 17px 48px 0" />
          <CustomSkeleton $w={233.594} $h={469} $m="0 17px 0 0" />
        </Box>
      </Layout>
    </>
  );
};

export default AccountSidebarSkeleton;
