import { Skeleton } from '@cencosud-ds/easy-design-system';
import { GallerySkeletonContainer } from './style';

const GallerySkeleton = () => {
  return (
    <GallerySkeletonContainer>
      <Skeleton />
    </GallerySkeletonContainer>
  );
};

export default GallerySkeleton;
