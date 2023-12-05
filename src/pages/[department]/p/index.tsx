import FooterSkeleton from '@/presentation/components/layouts/FooterSkeleton/FooterSkeleton';
import HeaderSkeleton from '@/presentation/components/layouts/HeaderSkeleton/HeaderSkeleton';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Pdp = dynamic(() => import('pdp/pdp'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const Header = dynamic(() => import('headerFooter/header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

const Footer = dynamic(() => import('headerFooter/footer'), {
  ssr: false,
  loading: () => <FooterSkeleton />,
});

const CartAside = dynamic(() => import('cart/cartAside'), {
  ssr: false,
  loading: () => <></>,
});

const PdpComponent = () => {
  return (
    <>
      <Head>
        <title>Easy.cl - Renueva el amor por tu hogar</title>
        <meta name="description" content="Easy CL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main>
        <Header />
        <Pdp />
        <CartAside />
        <Footer />
      </main>
    </>
  );
};

export default PdpComponent;
