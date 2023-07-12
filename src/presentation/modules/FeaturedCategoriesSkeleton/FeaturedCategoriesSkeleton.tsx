import React from 'react';
import {
  Container,
  SkeletonContainer,
} from './FeaturedCategoriesSkeleton.styles';
import { Skeleton } from '@mui/material';

const FeaturedCategoriesSkeleton = () => {
  return (
    <Container>
      {[...Array(8)].map((caluga, i) => (
        <SkeletonContainer key={`gallery_item_${i}`}>
          <Skeleton
            animation='wave'
            height={500}
            style={{
              transformOrigin: '0 0',
              backgroundColor: '#E1E6EA',
            }}
          />
        </SkeletonContainer>
      ))}
    </Container>
  );
};

export default FeaturedCategoriesSkeleton;
