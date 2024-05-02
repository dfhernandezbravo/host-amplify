import React from 'react';
import CarouselDots from './components/CarouselDots/CarouselDots';
import { SkeletonContainer } from './MainCarouselSkeleton.styles';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import Image from 'next/image';

const MainCarouselSkeleton = () => {
  return (
    <>
      <SkeletonContainer>
        <Skeleton animation="wave" height="450px" width="100%" />
        <Image
          fill
          style={{ objectFit: 'none' }}
          src="/images/easy-logo.svg"
          alt="Logo"
        />
      </SkeletonContainer>
      <CarouselDots />
    </>
  );
};

export default MainCarouselSkeleton;
