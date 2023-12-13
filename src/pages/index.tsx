import useAnalytics, { EventData } from '@/analytics/hooks/useAnalytics';
import { WINDOWS_EVENTS } from '@/events';
import detectOs from '@/helpers/detectOS';
import MainLayout from '@/presentation/components/layouts/main-layout';
import LogoLoader from '@/presentation/modules/LogoLoader/LogoLoader';
import dynamic from 'next/dynamic';
import { useCallback, useEffect } from 'react';

const Home = dynamic(() => import('home/home'), {
  ssr: false,
  loading: () => <LogoLoader />,
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
      event.stopImmediatePropagation();
      const customEvent = event as CustomEvent<EventData>;
      sendEvent(customEvent.detail);
    },
    [sendEvent],
  );

  useEffect(() => {
    document.addEventListener(WINDOWS_EVENTS.Analytics, handleAnalyticsEvent);
  }, [handleAnalyticsEvent]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('isHeadless', 'true');
    }
  }, []);

  console.log('>>> props in host <<<::', props);

  return (
    <MainLayout>
      <Home {...props} />
    </MainLayout>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const home = await import('home/home');
  if (home.getServerSideProps) {
    console.log('>>> Inside return <<::');
    console.log('CTX::', ctx);
    return home.getServerSideProps(ctx);
  }
  return {
    props: {},
  };
};

export const revalidate = 30;
