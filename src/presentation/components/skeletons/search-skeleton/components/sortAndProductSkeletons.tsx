import { SorterAndProductSkeletonsWrapper } from '../styles';
import ProductSkeletons from './productSkeletons';
import SorterSkeleton from './sorterSkeleton';

const SorterAndProductSkeletons = () => {
  return (
    <SorterAndProductSkeletonsWrapper>
      <SorterSkeleton />
      <ProductSkeletons />
    </SorterAndProductSkeletonsWrapper>
  );
};

export default SorterAndProductSkeletons;
