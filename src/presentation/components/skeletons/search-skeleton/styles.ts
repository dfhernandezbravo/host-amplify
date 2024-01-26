import styled from 'styled-components';

export const ContainerDesktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const SearchSkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 80rem;
  gap: 12px;
  grid-auto-flow: row;
  grid-template-areas:
    '. facets order order order .'
    '. facets products products products .';
`;

export const FacetSkeleton = styled.div`
  grid-area: facets;
`;

export const OrderSkeleton = styled.div`
  grid-area: order;
  height: 100px;
  margin-bottom: 4px;
`;

export const ProductsSkeleton = styled.div`
  grid-area: products;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;
