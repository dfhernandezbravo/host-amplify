import { Skeleton } from '@mui/material';
import React from 'react';
import { CalugasContainer, SkeletonContainer } from './CalugasSkeleton.styles';

const CalugasSkeleton = () => {
  return (
    <CalugasContainer>
      {[...Array(6)].map((caluga, i) => (
        <SkeletonContainer index={i} key={`calugas-skeleton-${i}`}>
          <Skeleton
            animation="wave"
            height={500}
            style={{
              transformOrigin: '0 0',
              backgroundColor: '#E1E6EA',
            }}
            key={`caluga-skeleton-${i}`}
          />
        </SkeletonContainer>
      ))}
    </CalugasContainer>
  );
};

export default CalugasSkeleton;
