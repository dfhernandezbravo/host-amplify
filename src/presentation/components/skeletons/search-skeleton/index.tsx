import { SearchSkeletonWrapper } from './styles';
import FiltersSkeleton from './components/filtersSkeleton';
import SortAndProductSkeletons from './components/sortAndProductSkeletons';

const SearchSkeleton = () => {
  return (
    <SearchSkeletonWrapper>
      <FiltersSkeleton />
      <SortAndProductSkeletons />
    </SearchSkeletonWrapper>
  );
};

export default SearchSkeleton;
