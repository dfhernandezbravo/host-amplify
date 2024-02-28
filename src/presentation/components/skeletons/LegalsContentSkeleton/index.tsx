import React, { FC } from 'react';
import { Layout, Skeleton } from '@cencosud-ds/easy-design-system';
import { Box, SkeletonContainer, Row } from './index.styles';

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
    <div style={{ padding: '24px' }}>
      <Layout is={['Desktop', 'Tablet']}>
        <Box>
          <Row justifycontent="space-between">
            <CustomSkeleton $w={'682px'} $h={'32px'} $m="0 0 4px 0" />
            <CustomSkeleton $w={'209px'} $h={'32px'} $m="0 0 12px 0" />
          </Row>

          <Row justifycontent="flex-end">
            <CustomSkeleton $w={'300px'} $h={'24px'} $m="0 0 0 0" />
          </Row>
        </Box>
        <Box>
          <CustomSkeleton $w={'341px'} $h={'28px'} $m="30px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
        </Box>
      </Layout>
      <Layout is={['Phone']}>
        <Box $width="100%">
          <Row justifycontent="space-between">
            <CustomSkeleton $w={'100%'} $h={'32px'} $m="0 0 4px 0" />
            <CustomSkeleton $w={'100%'} $h={'32px'} $m="0 0 0 0" />
          </Row>

          <Row justifycontent="flex-end">
            <CustomSkeleton $w={'100%'} $h={'24px'} $m="0 0 0 0" />
          </Row>
        </Box>
        <Box>
          <CustomSkeleton $w={'100%'} $h={'28px'} $m="30px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
          <CustomSkeleton $w={'100%'} $h={'44px'} $m="0 0 10px 0" />
        </Box>
      </Layout>
    </div>
  );
};

export default ContentLegalsSkeleton;
