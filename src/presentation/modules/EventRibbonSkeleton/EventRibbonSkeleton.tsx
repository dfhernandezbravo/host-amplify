import { Skeleton } from '@mui/material';
import React from 'react';
import { SkeletonContainer } from './EventRibbon.styles';

const EventRibbonSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton
        height={300}
        width="100%"
        style={{
          backgroundColor: '#8B9CA7',
          transformOrigin: '0 0',
        }}
      />
    </SkeletonContainer>
  );
};

export default EventRibbonSkeleton;
