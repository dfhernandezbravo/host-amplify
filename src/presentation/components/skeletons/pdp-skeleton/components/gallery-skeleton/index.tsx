import { Skeleton } from '@cencosud-ds/easy-design-system';
import { GallerySkeletonContainer } from './style';
import Image from 'next/image';

const GallerySkeleton = () => {
  return (
    <GallerySkeletonContainer>
      <Skeleton />
      <Image
        fill
        style={{ objectFit: 'none' }}
        src="/images/easy-logo.svg"
        alt="Logo"
      />
    </GallerySkeletonContainer>
  );
};

export default GallerySkeleton;
