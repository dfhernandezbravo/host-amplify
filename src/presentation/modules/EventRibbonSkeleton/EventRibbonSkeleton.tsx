import React from 'react';
import { SkeletonContainer } from './EventRibbon.styles';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const EventRibbonSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton height="300px" width="100%" />
    </SkeletonContainer>
  );
};

export default EventRibbonSkeleton;
