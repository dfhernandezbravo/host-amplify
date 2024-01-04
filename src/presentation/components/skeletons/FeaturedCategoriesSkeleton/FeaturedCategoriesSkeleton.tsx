import React from 'react';
import {
  Container,
  SkeletonContainer,
} from './FeaturedCategoriesSkeleton.styles';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const FeaturedCategoriesSkeleton = () => {
  return (
    <Container>
      {[...Array(8)].map((caluga, i) => (
        <SkeletonContainer key={`gallery_item_${i}`}>
          <Skeleton animation="wave" height="500px" />
        </SkeletonContainer>
      ))}
    </Container>
  );
};

export default FeaturedCategoriesSkeleton;
