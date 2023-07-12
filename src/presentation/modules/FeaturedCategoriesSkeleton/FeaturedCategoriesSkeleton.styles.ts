import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  margin: 1rem auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SkeletonContainer = styled.div`
  overflow: hidden;
  height: 290px;
  border-radius: 8px;
  width: 24%;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    width: 49%;
  }
`;
