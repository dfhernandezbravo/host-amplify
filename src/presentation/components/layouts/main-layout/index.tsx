import Head from 'next/head';
import React, { ReactNode } from 'react';
import { HeaderProps } from '@/@types/header-props';
import dynamic from 'next/dynamic';
import FooterSkeleton from '../FooterSkeleton/FooterSkeleton';

const Header = dynamic<HeaderProps>(() => import('headerFooter/header'), {
  ssr: false,
  loading: () => <></>,
});

const Footer = dynamic(() => import('headerFooter/footer'), {
  ssr: false,
  loading: () => <FooterSkeleton />,
});

const CartAside = dynamic(() => import('cart/cartAside'), {
  ssr: false,
  loading: () => <></>,
});

type MainLayoutStruct = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutStruct) => {
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
        {children}
        <Footer />
        <CartAside />
      </main>
    </>
  );
};

export default MainLayout;
