import { WINDOWS_EVENTS } from '@/application/infra/events';
import detectOs from '@/helpers/detectOS';
import useAnalytics, { EventData } from '@/presentation/hooks/use-analytics';
import { GetStaticProps } from 'next';
import { useCallback, useEffect } from 'react';
import Home from 'home/home';

export const revalidate = 60;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const home = await import('home/home');
  if (home.getStaticProps) {
    return home.getStaticProps(ctx);
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
