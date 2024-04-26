import styled from 'styled-components';

export const SearchSkeletonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;

  width: 80%;
  margin: 0 auto;

  @media (width <= 1024px) {
    width: 95%;
  }

  @media (width <= 500px) {
    width: 100%;
    padding: 2rem 0.5rem;
  }
`;

export const SorterAndProductSkeletonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
`;

export const ProductSkeletonsWrapper = styled.div<{ isGrid: boolean }>`
  display: ${({ isGrid }) => (isGrid ? 'grid' : 'flex')};
  flex-direction: column;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media (width <= 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width <= 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
