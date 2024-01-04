import React from 'react';
import { SkeletonContainer } from './FooterSkeleton.styles';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const FooterSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton animation="pulse" height="1000px" />
    </SkeletonContainer>
  );
};

export default FooterSkeleton;
