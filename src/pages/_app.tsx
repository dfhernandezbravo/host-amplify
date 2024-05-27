import '@/presentation/assets/styles/globals.css';
import MainLayout from '@/presentation/components/layouts/main-layout';
import ProvidersLayout from '@/presentation/components/layouts/providers-layout';
import ServerError from '@/presentation/components/molecules/ServerError';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import PageNotFound from './404';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  if (pageProps?.statusCode === 404) {
    return (
      <ProvidersLayout>
        {getLayout(<PageNotFound {...pageProps} />)}
      </ProvidersLayout>
    );
  }
  if (pageProps?.statusCode === 500) {
    return (
      <ProvidersLayout>
        {getLayout(<ServerError {...pageProps} />)}
      </ProvidersLayout>
    );
  }

  return (
    <main>
      <ProvidersLayout>
        {getLayout(<Component {...pageProps} />)}
      </ProvidersLayout>
    </main>
  );
}
