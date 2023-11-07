import { HeaderProps } from '@/@types/header-props';
import useAnalytics, { EventData } from '@/analytics/hooks/useAnalytics';
import { WINDOWS_EVENTS } from '@/events';
import detectOs from '@/helpers/detectOS';
import FooterSkeleton from '@/presentation/components/layouts/FooterSkeleton/FooterSkeleton';
import HeaderSkeleton from '@/presentation/components/layouts/HeaderSkeleton/HeaderSkeleton';
import HomeSkeleton from '@/presentation/components/layouts/HomeSkeleton/HomeSkeleton';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const Header = dynamic<HeaderProps>(() => import('headerFooter/header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

const Footer = dynamic(() => import('headerFooter/footer'), {
  ssr: false,
  loading: () => <FooterSkeleton />,
});
const Home = dynamic(() => import('home/home'), {
  ssr: false,
  loading: () => <HomeSkeleton />,
});

const CartAside = dynamic(() => import('cart/cartAside'), {
  ssr: false,
  loading: () => <></>,
});

export default function HomeApp(props: any) {
  const { sendEvent } = useAnalytics();
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    (async () => {
      await detectOs(props);
    })();
  }, [props]);

  const handleAnalyticsEvent = useCallback(
    (event: Event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      const customEvent = event as CustomEvent<EventData>;
      sendEvent(customEvent.detail);
    },
    [sendEvent],
  );

  useEffect(() => {
    document.addEventListener(WINDOWS_EVENTS.Analytics, handleAnalyticsEvent);
  }, [handleAnalyticsEvent]);

  if (showLogo) {
    return <LogoLoader />; // Render the component for 1 second
  }

  return (
    <>
      <Head>
        <title>Easy.cl - Renueva el amor por tu hogar</title>
        <meta name="description" content="Easy CL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main>
        <ErrorBoundary FallbackComponent={() => <></>}>
          <Header
            modules={{
              logo: true,
              location: true,
              categories: true,
              search: true,
              login: true,
              cart: true,
              topBrands: true,
              footerHeader: true,
            }}
            cartId=""
          />
          <Home />
          <Footer />
          <CartAside />
        </ErrorBoundary>
      </main>
    </>
  );
}
