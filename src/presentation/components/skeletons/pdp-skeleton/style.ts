import styled from 'styled-components';

export const PdpSkeletonContainer = styled.div`
  position: relative;
  max-width: 79.25rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Separator = styled.div`
  border-left: 1px solid #e0e3e8;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 2rem;
  background-color: #fff;
  margin: 0 1rem;
  margin-bottom: 2rem;
  padding: 3.5rem 2rem;
  min-height: fit-content;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.5rem;
  }
`;

export const BreadcrumbsSkeleton = styled.div`
  margin: 1rem 0;
  height: 20.5px;
  width: 40dvw;
  padding-left: 1rem;
  overflow: hidden;
`;
