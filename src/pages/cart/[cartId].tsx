import HeaderSkeleton from '@/presentation/components/layouts/HeaderSkeleton/HeaderSkeleton';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';

const RemoteCart = dynamic(() => import('cart/cart'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const Header = dynamic(() => import('headerFooter/header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

export default function Cart() {
  return (
    <>
      <Header />
      <RemoteCart />
    </>
  );
}
