import React, { FC } from 'react';
import { Layout, Skeleton } from '@cencosud-ds/easy-design-system';
import { Box, SkeletonContainer } from './index.styles';

const CustomSkeleton: FC<{
  $w?: string;
  $h?: string;
  $m?: string;
  $b?: string;
}> = ({ ...props }) => (
  <SkeletonContainer {...props}>
    <Skeleton animation="wave" />
  </SkeletonContainer>
);

const ContentLegalsSkeleton = () => {
  return (
    <>
      <Layout is={['Desktop', 'Tablet']}>
        <Box>
          <CustomSkeleton $w={'105px'} $h={'19px'} $m="0 0 6px 0" />
          <CustomSkeleton $w={'105px'} $h={'36.667px'} $m="0 0 55px 0" />
          <CustomSkeleton $w={'625px'} $h={'368px'} $m="0 0 0 0" />
        </Box>
      </Layout>
      <Layout is={['Phone']}>
        <Box $width="100%">
          <CustomSkeleton $w={'105px'} $h={'19px'} $m="0 0 6px 0" />
          <CustomSkeleton $w={'105px'} $h={'36.667px'} $m="0 0 55px 0" />
          <CustomSkeleton $w={'100%'} $h={'368px'} $m="0 0 0 0" />
        </Box>
      </Layout>
    </>
  );
};

export default ContentLegalsSkeleton;
