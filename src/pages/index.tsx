import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';

import dynamic from 'next/dynamic';
import { NextPageContext } from 'next';
import { use, useEffect } from 'react';
import detectOs from '@/helpers/detectOS';

const Header = dynamic(() => import('headerFooter/header'), {
  ssr: false,
  loading: () => (
    <p style={{ height: '80px', width: '100vw' }}>Loading header...</p>
  ),
});
const Footer = dynamic(() => import('headerFooter/footer'), {
  ssr: false,
  loading: () => (
    <p style={{ height: '80px', width: '100vw' }}>Loading footer...</p>
  ),
});
const Home = dynamic(() => import('home/home'), {
  ssr: false,
  loading: () => (
    <p style={{ height: '1500px', width: '100vw' }}>Loading home...</p>
  ),
});
const CartAside = dynamic(() => import('cart/cartAside'), {
  ssr: false,
  loading: () => <></>,
});

export default function HomeApp(props: any) {
  useEffect(() => {
    (async () => {
      await detectOs(props);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Easy.cl - Renueva el amor por tu hogar</title>
        <meta name='description' content='Easy CL' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.webp' />
      </Head>
      <main>
        <ErrorBoundary FallbackComponent={() => <></>}>
          <Header />
          <Home />
          <Footer />
          <CartAside />
        </ErrorBoundary>
      </main>
    </>
  );
}
