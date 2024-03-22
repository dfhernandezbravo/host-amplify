import React from 'react';
import {
  CardBodySkeleton,
  Container,
  ImageSkeleton,
  ProductSkeletonCard,
} from './ProductsCarouselSkeleton.styles';
import useDevice from '@/presentation/hooks/useDevice';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const ProductsCarouselSkeleton = () => {
  const { device } = useDevice();

  return (
    <Container>
      {[...Array(device === 'Phone' ? 3 : device === 'Tablet' ? 4 : 5)].map(
        (product, i) => (
          <ProductSkeletonCard key={`product-skeleton-${i}`}>
            <ImageSkeleton>
              <Skeleton animation="wave" width="100%" height="300px" />
            </ImageSkeleton>
            <CardBodySkeleton>
              <Skeleton animation="wave" height="30px" width="40%" />
              <Skeleton animation="wave" height="30px" width="50%" />
              <Skeleton animation="wave" height="30px" width="65%" />
              <Skeleton animation="wave" height="30px" width="25%" />
              <Skeleton animation="wave" height="55px" />
            </CardBodySkeleton>
          </ProductSkeletonCard>
        ),
      )}
    </Container>
  );
};

export default ProductsCarouselSkeleton;
