import styled from 'styled-components';

export const GallerySkeletonContainer = styled.div`
  display: flex;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    height: 80dvh;
    display: flex;
    justify-content: center;
  }
`;

export const MainImageSkeleton = styled.div`
  height: 100%;
  width: 100%;
`;

export const ThumbnailsSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  width: 15%;
`;

export const ThumbnailSkeletonContainer = styled.div`
  height: 79px;
  width: 79px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border: 1px solid #e0e3e8;
  border-radius: 8px;
`;
