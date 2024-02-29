import '@/presentation/assets/styles/globals.css';
import MainLayout from '@/presentation/components/layouts/main-layout';
import ProvidersLayout from '@/presentation/components/layouts/providers-layout';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

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
    <main className={openSans.className}>
      <ProvidersLayout>
        {getLayout(<Component {...pageProps} />)}
      </ProvidersLayout>
    </main>
  );
}
