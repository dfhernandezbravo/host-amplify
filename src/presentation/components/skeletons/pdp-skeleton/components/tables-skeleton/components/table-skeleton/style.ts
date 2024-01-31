import styled from 'styled-components';

export const TableSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  overflow: hidden;
`;

export const TableTitleSkeleton = styled.div`
  height: 1.5rem;
  width: 12rem;
  margin: 0.5rem 1rem;
  overflow: hidden;
`;

export const RowSkeletonContainer = styled.div`
  height: 1rem;
  width: 18rem;
  overflow: hidden;
`;

export const Row = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  display: flex;
  & span {
    width: 50%;
  }
`;
