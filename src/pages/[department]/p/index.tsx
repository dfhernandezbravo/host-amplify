import MainLayout from '@/presentation/components/layouts/main-layout';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Pdp = dynamic(() => import('pdp/pdp'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const PdpComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('isHeadless', 'true');
    }
  }, []);

  return (
    <MainLayout>
      <Pdp />
    </MainLayout>
  );
};

export default PdpComponent;
