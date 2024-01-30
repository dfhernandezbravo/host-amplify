import React from 'react';
import { CarouselDotsContainer, Dot, InnerDot } from './CarouselDots.styles';

const CarouselDots = () => {
  return (
    <CarouselDotsContainer>
      {[...Array(7)].map((dot, i) => (
        <Dot index={i} key={`carousel-dot-skeleton-${i}`}>
          <InnerDot index={i}></InnerDot>
        </Dot>
      ))}
    </CarouselDotsContainer>
  );
};

export default CarouselDots;
