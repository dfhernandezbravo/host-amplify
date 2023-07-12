import { Skeleton } from '@mui/material';
import React from 'react';
import { SkeletonContainer } from './HeaderSkeleton.styles';

const HeaderSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton
        animation='pulse'
        height={600}
        style={{
          transformOrigin: '0 0',
          backgroundColor: '#a1b3bf',
        }}
      />
    </SkeletonContainer>
  );
};

export default HeaderSkeleton;
