import { Skeleton } from '@mui/material';
import React from 'react';
import { SkeletonContainer } from './FooterSkeleton.styles';

const FooterSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton
        animation='pulse'
        height={1000}
        style={{
          transformOrigin: '0 0',
          backgroundColor: '#a1b3bf',
        }}
      />
    </SkeletonContainer>
  );
};

export default FooterSkeleton;
