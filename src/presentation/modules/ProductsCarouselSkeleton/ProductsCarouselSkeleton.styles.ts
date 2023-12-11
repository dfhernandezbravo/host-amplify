import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductSkeletonCard = styled.div`
  height: 326px;
  background-color: #fff;
  width: 17%;
  border-radius: 8px;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 23%;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 640px) {
    width: 48%;
  }
`;

export const ImageSkeleton = styled.div`
  height: 153px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const CardBodySkeleton = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 165px;
`;
