import { HeaderProps } from '@/domain/interfaces/header';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import FooterSkeleton from '../../skeletons/FooterSkeleton/FooterSkeleton';
import HeaderSkeleton from '../../skeletons/HeaderSkeleton/HeaderSkeleton';

const Header = dynamic<HeaderProps>(() => import('headerFooter/header'), {
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

type MainLayoutStruct = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutStruct) => {
  return (
    <>
      <Head>
        <title>Easy.cl - Renueva el amor por tu hogar</title>
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
