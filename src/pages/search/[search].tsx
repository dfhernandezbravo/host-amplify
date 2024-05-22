import { WINDOWS_EVENTS } from '@/application/infra/events';
import useAnalytics, { EventData } from '@/presentation/hooks/use-analytics';
import { useCallback, useEffect } from 'react';
import Plp from 'plp/plp-search';

const SearchPLPPage = () => {
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

  return <Plp />;
};

export default SearchPLPPage;
