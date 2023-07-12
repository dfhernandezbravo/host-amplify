import React from 'react';
import {
  CardBodySkeleton,
  Container,
  ImageSkeleton,
  ProductSkeletonCard,
} from './ProductsCarouselSkeleton.styles';
import { Skeleton } from '@mui/material';
import useBreakpoints from '@/presentation/hooks/useBreakpoints';

const ProductsCarouselSkeleton = () => {
  const { isSm, isXs, isMd } = useBreakpoints();

  const skeletonStyles = {
    transformOrigin: '0 0',
    backgroundColor: '#E1E6EA',
  };

  return (
    <Container>
      {[...Array(isXs ? 2 : isSm ? 3 : isMd ? 4 : 5)].map((product, i) => (
        <ProductSkeletonCard key={`product-skeleton-${i}`}>
          <ImageSkeleton>
            <Skeleton
              animation='wave'
              width='100%'
              height={300}
              style={skeletonStyles}
            />
          </ImageSkeleton>
          <CardBodySkeleton>
            <Skeleton
              animation='wave'
              height={30}
              width='40%'
              style={skeletonStyles}
            />
            <Skeleton
              animation='wave'
              height={30}
              width='50%'
              style={skeletonStyles}
            />
            <Skeleton
              animation='wave'
              height={30}
              width='65%'
              style={skeletonStyles}
            />
            <Skeleton
              animation='wave'
              height={30}
              width='25%'
              style={skeletonStyles}
            />
            <Skeleton animation='wave' height={55} style={skeletonStyles} />
          </CardBodySkeleton>
        </ProductSkeletonCard>
      ))}
    </Container>
  );
};

export default ProductsCarouselSkeleton;
