import React from 'react';
import { TablesSkeletonContainer, TitleSkeleton } from './style';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import TableSkeleton from './components/table-skeleton';

const TablesSkeleton = () => {
  return (
    <TablesSkeletonContainer>
      <TitleSkeleton>
        <Skeleton />
      </TitleSkeleton>
      <TableSkeleton count={3} />
      <TableSkeleton count={7} />
      <TableSkeleton count={1} />
    </TablesSkeletonContainer>
  );
};

export default TablesSkeleton;
