import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';
import useAnalytics, { EventData } from '@/analytics/hooks/useAnalytics';
import { WINDOWS_EVENTS } from '@/events';
import detectOs from '@/helpers/detectOS';
import dynamic from 'next/dynamic';
import { useCallback, useEffect } from 'react';

import HomeSkeleton from '@/presentation/components/layouts/HomeSkeleton/HomeSkeleton';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import HeaderSkeleton from '@/presentation/components/layouts/HeaderSkeleton/HeaderSkeleton';
import FooterSkeleton from '@/presentation/components/layouts/FooterSkeleton/FooterSkeleton';

const Header = dynamic(() => import('headerFooter/headers'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});
const Footer = dynamic(() => import('headerFooter/footers'), {
  ssr: false,
  loading: () => <FooterSkeleton />,
});
const Home = dynamic(() => import('home/homes'), {
  ssr: false,
  loading: () => <HomeSkeleton />,
});
const CartAside = dynamic(() => import('cart/cartAside'), {
  ssr: false,
  loading: () => <></>,
});

export default function HomeApp(props: any) {
  const { sendEvent } = useAnalytics();

  useEffect(() => {
    (async () => {
      await detectOs(props);
    })();
  }, [props]);

  const handleAnalyticsEvent = useCallback(
    (event: Event) => {
      event.preventDefault();
      const customEvent = event as CustomEvent<EventData>;
      sendEvent(customEvent.detail);
    },
    [sendEvent]
  );

  useEffect(() => {
    document.addEventListener(WINDOWS_EVENTS.Analytics, handleAnalyticsEvent);
  }, [handleAnalyticsEvent]);

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
