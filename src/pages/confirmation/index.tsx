import { WINDOWS_EVENTS } from '@/application/infra/events';
import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import useAnalytics, { EventData } from '@/presentation/hooks/use-analytics';
import dynamic from 'next/dynamic';
import { useCallback, useEffect } from 'react';

const Confirmation = dynamic(() => import('confirmation/confirmation'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const ConfirmationPage = () => {
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
  return <Confirmation />;
};

export default ConfirmationPage;
