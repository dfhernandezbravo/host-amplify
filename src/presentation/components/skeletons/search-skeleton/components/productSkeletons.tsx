import { useRouter } from 'next/router';
import { ProductSkeletonsWrapper } from '../styles';
import Skeleton from '@/presentation/components/atoms/skeleton';

const gridSkeleton = (
  <Skeleton animationtype="pulse" radius="0.5rem" height="488px" width="auto" />
);

const listSkeleton = (
  <Skeleton animationtype="pulse" radius="0.5rem" height="200px" width="100%" />
);

interface Props {
  quantity?: number;
}

const ProductSkeletons = ({ quantity = 8 }: Props) => {
  const {
    query: { layout = 'grid' },
  } = useRouter();

  const isGrid = layout === 'grid';

  const skeleton = isGrid ? gridSkeleton : listSkeleton;

  return (
    <ProductSkeletonsWrapper isGrid={isGrid}>
      {new Array(quantity).fill(skeleton)}
    </ProductSkeletonsWrapper>
  );
};

export default ProductSkeletons;
