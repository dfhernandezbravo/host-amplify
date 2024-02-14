import '@/presentation/assets/styles/globals.css';
import MainLayout from '@/presentation/components/layouts/main-layout';
import ProvidersLayout from '@/presentation/components/layouts/providers-layout';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <ProvidersLayout>{getLayout(<Component {...pageProps} />)}</ProvidersLayout>
  );
}
