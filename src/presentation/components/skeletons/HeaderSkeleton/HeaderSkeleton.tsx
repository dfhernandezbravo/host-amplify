import React from 'react';
import { SkeletonContainer } from './HeaderSkeleton.styles';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const HeaderSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton animation="pulse" />
    </SkeletonContainer>
  );
};

export default HeaderSkeleton;
