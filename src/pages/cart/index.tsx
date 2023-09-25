import HeaderSkeleton from '@/presentation/components/layouts/HeaderSkeleton/HeaderSkeleton';
import dynamic from 'next/dynamic';

const RemoteCart = dynamic(() => import('cart/cart'), {
  ssr: false,
  loading: () => (
    <p style={{ height: '80px', width: '100vw' }}>Loading cart...</p>
  ),
});

const Header = dynamic(() => import('headerFooter/header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

export default function Cart() {
  return  (
    <>
      <Header/>
      <RemoteCart />
    </>
  )
}
