import { LegalsComponentProps } from '@/domain/interfaces/legals';
import LegalsContentSkeleton from '@/presentation/components/skeletons/LegalsContentSkeleton';
import dynamic from 'next/dynamic';
import React from 'react';

const TermsAndConditionsComponent = dynamic(
  () => import('home/legals-layout'),
  {
    ssr: false,
    loading: () => <LegalsContentSkeleton />,
  },
);

const TermsAndConditionsComponents: LegalsComponentProps = {
  'terms-and-conditions': TermsAndConditionsComponent,
};

export default TermsAndConditionsComponents;
