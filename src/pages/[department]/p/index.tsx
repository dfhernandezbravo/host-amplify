import PdpSkeleton from '@/presentation/components/skeletons/pdp-skeleton/pdp-skeleton';
import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useCallback, useEffect } from 'react';
import useAnalytics, { EventData } from '@/presentation/hooks/use-analytics';
import { WINDOWS_EVENTS } from '@/application/infra/events';

const Pdp = dynamic(() => import('pdp/pdp'), {
  ssr: false,
  loading: () => <PdpSkeleton />,
});

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const pdp = await import('pdp/pdp');
  if (pdp.getServerSideProps) {
    return pdp.getServerSideProps(ctx);
  }
  return {
    props: { repo: null },
  };
};

const PdpComponent = (props: any) => {
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
  const { sendPageViewEvent } = useAnalytics();

  useEffect(() => {
    sendPageViewEvent({
      event: 'page_view',
      // eslint-disable-next-line camelcase
      page_title: 'PDP',
      page: window.location.pathname,
      // eslint-disable-next-line camelcase
      page_location: window.location.href,
    });
  }, []);

  useEffect(() => {
    document.addEventListener(WINDOWS_EVENTS.Analytics, handleAnalyticsEvent);
  }, [handleAnalyticsEvent]);

  return <Pdp {...props} />;
};

export default PdpComponent;
