import React from 'react';
import CarouselDots from './components/CarouselDots/CarouselDots';
import { SkeletonContainer } from './MainCarouselSkeleton.styles';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const MainCarouselSkeleton = () => {
  return (
    <>
      <SkeletonContainer>
        <Skeleton animation="wave" height="800px" width="100%" />
      </SkeletonContainer>
      <CarouselDots />
    </>
  );
};

export default MainCarouselSkeleton;
