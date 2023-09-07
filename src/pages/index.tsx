import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';
import useAnalytics, { EventData } from '@/analytics/hooks/useAnalytics';
import { WINDOWS_EVENTS } from '@/events';
import detectOs from '@/helpers/detectOS';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';

import HomeSkeleton from '@/presentation/components/layouts/HomeSkeleton/HomeSkeleton';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import HeaderSkeleton from '@/presentation/components/layouts/HeaderSkeleton/HeaderSkeleton';
import FooterSkeleton from '@/presentation/components/layouts/FooterSkeleton/FooterSkeleton';

const Header = dynamic(() => import('headerFooter/header'), {
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

type RemoteConfig = {
  isEnabledCart: boolean;
  isEnabledFooter: boolean;
  isEnabledHeader: boolean;
  isEnabledHome: boolean;
  isEnabledLevelCeroLandings: boolean;
  isEnabledMiniCart: boolean;
};

export default function HomeApp(props: any) {
  const { sendEvent } = useAnalytics();
  const [showLogo, setShowLogo] = useState(true);
  const [remoteConfig, setRemoteConfig] = useState<RemoteConfig>({
    isEnabledCart: false,
    isEnabledFooter: false,
    isEnabledHeader: false,
    isEnabledHome: false,
    isEnabledLevelCeroLandings: false,
    isEnabledMiniCart: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

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
    [sendEvent]
  );

  useEffect(() => {
    document.addEventListener(WINDOWS_EVENTS.Analytics, handleAnalyticsEvent);
  }, [handleAnalyticsEvent]);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      const key = Object.keys(event?.data);
      if (key?.length > 0 && key[0] === 'HYBRIDATION') {
        const dataEvent = JSON.parse(event.data.HYBRIDATION) as RemoteConfig;
        setRemoteConfig(dataEvent);
        localStorage.setItem('isHybridation', event.data.HYBRIDATION);
      }
    });
  }, []);

  useEffect(() => {
    console.log(remoteConfig)
  }, [remoteConfig])
  

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
          {remoteConfig.isEnabledHeader && <Header />}
          {remoteConfig.isEnabledHome && <Home />}
          {remoteConfig.isEnabledFooter && <Footer />}
          {remoteConfig.isEnabledCart && <CartAside />}
        </ErrorBoundary>
      </main>
    </>
  );
}
