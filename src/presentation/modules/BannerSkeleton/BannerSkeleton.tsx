import React from 'react';
import { SkeletonContainer } from './BannerSkeleton.styles';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const BannerSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton animation="wave" height="600px" />
    </SkeletonContainer>
  );
};

export default BannerSkeleton;
