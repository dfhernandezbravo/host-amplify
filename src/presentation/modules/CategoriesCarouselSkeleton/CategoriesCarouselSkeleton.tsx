import React from 'react';
import {
  CarouselNavButton,
  CategorySkeleton,
  Container,
  Icon,
} from './CategoriesCarouselSkeleton.styles';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';
import CarouselDots from './CarouselDots/CarouselDots';
import { Skeleton } from '@cencosud-ds/easy-design-system';

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
              height="48px"
              width="48px"
              animation="wave"
              borderRadius="50%"
            />
            <Skeleton width="70px" height="25px" animation="wave" />
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
