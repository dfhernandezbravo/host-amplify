import React from 'react';
import {
  CarouselNavButton,
  CategorySkeleton,
  Container,
  Icon,
} from './CategoriesCarouselSkeleton.styles';
import { Skeleton } from '@mui/material';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import CarouselDots from './CarouselDots/CarouselDots';

const CategoriesCarouselSkeleton = () => {
  const { isXs, isSm, isMd } = useBreakpoints();

  return (
    <>
      <Container>
        {[...Array(8)].map((category, i) => (
          <CategorySkeleton
            isMobile={isXs || isSm || isMd}
            key={`category-skeleton-${i}`}
            index={i}
          >
            <Skeleton
              height={48}
              width={48}
              animation='wave'
              variant='circular'
              style={{
                marginBottom: '0.5rem',
                backgroundColor: '#E1E6EA',
              }}
            />
            <Skeleton
              width={70}
              height={25}
              animation='wave'
              style={{
                backgroundColor: '#E1E6EA',
              }}
            />
          </CategorySkeleton>
        ))}
        <CarouselNavButton>
          <Icon>{'<'}</Icon>
        </CarouselNavButton>
        <CarouselNavButton right>
          <Icon>{'>'}</Icon>
        </CarouselNavButton>
      </Container>
      <CarouselDots />
    </>
  );
};

export default CategoriesCarouselSkeleton;
