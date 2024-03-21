import { WINDOWS_EVENTS } from '@/application/infra/events';
import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import useAnalytics, { EventData } from '@/presentation/hooks/use-analytics';
import dynamic from 'next/dynamic';
import { useCallback, useEffect } from 'react';

const Plp = dynamic(() => import('plp/plp-eventos'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

export const getServerSideProps = async (ctx: any) => {
  const plp = await import('plp/plp-eventos');
  if (plp?.getServerSideProps) {
    return plp.getServerSideProps(ctx);
  }
  return {
    props: {},
  };
};

const EventsPLPPage = (props: any) => {
  const { sendEvent } = useAnalytics();
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
  return <Plp {...props} />;
};

export default EventsPLPPage;
