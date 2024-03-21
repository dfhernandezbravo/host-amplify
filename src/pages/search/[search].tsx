import SearchSkeleton from '@/presentation/components/skeletons/search-skeleton';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../_app';
import { useCallback, useEffect } from 'react';
import { WINDOWS_EVENTS } from '@/application/infra/events';
import useAnalytics, { EventData } from '@/presentation/hooks/use-analytics';

const Plp = dynamic(() => import('plp/plp-search'), {
  ssr: false,
  loading: () => <SearchSkeleton />,
});

const SearchPLPPage: NextPageWithLayout = () => {
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

SearchPLPPage.getLayout = (page) => page;

export default SearchPLPPage;
