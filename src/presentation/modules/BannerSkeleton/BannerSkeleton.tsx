import React from 'react';
import { SkeletonContainer } from './BannerSkeleton.styles';
import { Skeleton } from '@mui/material';

const BannerSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton
        animation="wave"
        height={600}
        style={{
          backgroundColor: '#E1E6EA',
          transformOrigin: '0 0',
        }}
      />
    </SkeletonContainer>
  );
};

export default BannerSkeleton;
