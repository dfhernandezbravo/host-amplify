import React from 'react';
import {
  BreadcrumbsSkeleton,
  PdpSkeletonContainer,
  Section,
  Separator,
} from './style';
import GallerySkeleton from './components/gallery-skeleton';
import DetailsSkeleton from './components/details-skeleton/details-skeleton';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import TablesSkeleton from './components/tables-skeleton';

const PdpSkeleton = () => {
  return (
    <PdpSkeletonContainer>
      <BreadcrumbsSkeleton>
        <Skeleton />
      </BreadcrumbsSkeleton>
      <Section>
        <GallerySkeleton />
        <Separator />
        <DetailsSkeleton />
      </Section>
      <Section>
        <TablesSkeleton />
      </Section>
    </PdpSkeletonContainer>
  );
};

export default PdpSkeleton;
