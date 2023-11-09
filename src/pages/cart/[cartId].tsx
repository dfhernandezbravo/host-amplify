import { HeaderProps } from '@/@types/header-props';
import HeaderSkeleton from '@/presentation/components/layouts/HeaderSkeleton/HeaderSkeleton';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

const RemoteCart = dynamic(() => import('cart/cart'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const Header = dynamic<HeaderProps>(() => import('headerFooter/header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

interface ParsedUrlQueryForPage extends ParsedUrlQuery {
  cartId: string;
}

export default function Cart() {
  const { query } = useRouter();
  const { cartId } = query as ParsedUrlQueryForPage;

  return (
    <>
      <Header
        modules={{
          logo: true,
          location: false,
          categories: false,
          search: false,
          login: false,
          cart: false,
          topBrands: false,
          footerHeader: false,
        }}
        cartId={cartId}
      />
      <RemoteCart />
    </>
  );
}
