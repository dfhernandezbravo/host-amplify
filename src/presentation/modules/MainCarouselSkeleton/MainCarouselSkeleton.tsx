import { Skeleton } from '@mui/material';
import React from 'react';
import CarouselDots from './components/CarouselDots/CarouselDots';
import { SkeletonContainer } from './MainCarouselSkeleton.styles';

const MainCarouselSkeleton = () => {
  return (
    <>
      <SkeletonContainer>
        <Skeleton
          animation='wave'
          height={800}
          width='100%'
          style={{
            transformOrigin: '0 0',
            backgroundColor: '#E1E6EA',
          }}
        />
      </SkeletonContainer>
      <CarouselDots />
    </>
  );
};

export default MainCarouselSkeleton;
