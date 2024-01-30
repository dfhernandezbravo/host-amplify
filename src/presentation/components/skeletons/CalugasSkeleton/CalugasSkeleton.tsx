import React from 'react';
import { CalugasContainer, SkeletonContainer } from './CalugasSkeleton.styles';
import { Skeleton } from '@cencosud-ds/easy-design-system';

const CalugasSkeleton = () => {
  return (
    <CalugasContainer>
      {[...Array(6)].map((_caluga, i) => (
        <SkeletonContainer index={i} key={`calugas-skeleton-${i}`}>
          <Skeleton
            animation="wave"
            height="500px"
            key={`caluga-skeleton-${i}`}
          />
        </SkeletonContainer>
      ))}
    </CalugasContainer>
  );
};

export default CalugasSkeleton;
