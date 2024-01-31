import React from 'react';
import { MainImageSkeleton, GallerySkeletonContainer } from './style';
import { Skeleton, useDevice } from '@cencosud-ds/easy-design-system';

const GallerySkeleton = () => {
  const { device } = useDevice();

  return (
    <GallerySkeletonContainer>
      <Skeleton />
    </GallerySkeletonContainer>
  );
};

export default GallerySkeleton;
