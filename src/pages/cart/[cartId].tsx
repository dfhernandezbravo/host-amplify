import { WINDOWS_EVENTS } from '@/application/infra/events';
import { HeaderProps } from '@/domain/interfaces/header';
import HeaderSkeleton from '@/presentation/components/skeletons/HeaderSkeleton/HeaderSkeleton';
import LogoLoader from '@/presentation/components/skeletons/LogoLoader/LogoLoader';
import useAnalytics, { EventData } from '@/presentation/hooks/use-analytics';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useCallback, useEffect } from 'react';
import { NextPageWithLayout } from '../_app';

const RemoteCart = dynamic(() => import('cart/cart'), {
  ssr: false,
  loading: () => <LogoLoader />,
});

const Header = dynamic<HeaderProps>(() => import('headerFooter/header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});

interface ParsedUrlQueryForPage extends ParsedUrlQuery {
  cartId: string;
}

const Cart: NextPageWithLayout = () => {
  const { query } = useRouter();
  const { cartId } = query as ParsedUrlQueryForPage;
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

  return (
    <>
      <Header
        modules={{
          logo: true,
          location: false,
          categories: false,
          search: false,
          login: false,
          cart: false,
          topBrands: false,
          footerHeader: false,
        }}
        cartId={cartId}
      />
      <RemoteCart />
    </>
  );
};

Cart.getLayout = (page) => page;

export default Cart;
