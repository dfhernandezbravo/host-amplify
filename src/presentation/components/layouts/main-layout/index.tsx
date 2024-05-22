import Head from 'next/head';
import React, { ReactNode, useEffect } from 'react';
import Header from 'headerFooter/header';
import Footer from 'headerFooter/footer';
import CartAside from 'cart/cartAside';

type MainLayoutStruct = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutStruct) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('isHeadless', 'true');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Easy.cl - Renueva el amor por tu hogar</title>
      </Head>
      <main>
        <Header />
        <div style={{ minHeight: '50vh' }}>{children}</div>
        <Footer />
        <CartAside />
      </main>
    </>
  );
};

export default MainLayout;
