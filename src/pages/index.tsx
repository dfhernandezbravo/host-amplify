import { WINDOWS_EVENTS } from '@/application/infra/events';
import detectOs from '@/helpers/detectOS';
import HomeSkeleton from '@/presentation/components/skeletons/HomeSkeleton/HomeSkeleton';
import useAnalytics, { EventData } from '@/presentation/hooks/use-analytics';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useCallback, useEffect } from 'react';

const Home = dynamic(() => import('home/home'), {
  ssr: false,
  loading: () => <HomeSkeleton />,
});

export const revalidate = 30;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const home = await import('home/home');
  if (home.getServerSideProps) {
    return home.getServerSideProps(ctx);
  }
  return {
    props: {},
  };
};

const HomeApp = (props: any) => {
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

  return <Home {...props} />;
};

export default HomeApp;
