import { Skeleton } from '@cencosud-ds/easy-design-system';
import React from 'react';
import { DetailsSkeletonContainer } from './style';

const DetailsSkeleton = () => {
  return (
    <DetailsSkeletonContainer>
      <Skeleton height={'100%'} />
    </DetailsSkeletonContainer>
  );
};

export default DetailsSkeleton;
