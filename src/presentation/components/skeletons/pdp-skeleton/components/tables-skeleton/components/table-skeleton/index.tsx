import React from 'react';
import {
  Row,
  RowSkeletonContainer,
  TableSkeletonContainer,
  TableTitleSkeleton,
} from './style';
import { themeEasy, Skeleton } from '@cencosud-ds/easy-design-system';

type Props = { count: number };

const TableSkeleton = ({ count = 1 }: Props) => {
  const isEven = (index: number): boolean => {
    return index % 2 === 0;
  };

  return (
    <TableSkeletonContainer>
      <TableTitleSkeleton>
        <Skeleton />
      </TableTitleSkeleton>
      {[...Array(count)].map((item, index) => (
        <Row
          key={`row-skeleton-${index}`}
          color={
            isEven(index)
              ? themeEasy.colors.neutral[200]
              : themeEasy.colors.neutral[100]
          }
        >
          <span>
            <RowSkeletonContainer>
              <Skeleton />
            </RowSkeletonContainer>
          </span>
          <span>
            <RowSkeletonContainer>
              <Skeleton />
            </RowSkeletonContainer>
          </span>
        </Row>
      ))}
    </TableSkeletonContainer>
  );
};

export default TableSkeleton;
