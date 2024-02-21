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
          <CustomSkeleton $w={'855.91px'} $h={'668px'} $m="0 0 0 0" />
        </Box>
      </Layout>
      <Layout is={['Phone']}>
        <Box $width="100%">
          <CustomSkeleton $w={'100%'} $h={'768px'} $m="0 0 0 0" />
        </Box>
      </Layout>
    </>
  );
};

export default ContentLegalsSkeleton;
