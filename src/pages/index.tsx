import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import useAnalytics, { EventData } from "@/analytics/hooks/useAnalytics";
import { WINDOWS_EVENTS } from "@/events";
import detectOs from "@/helpers/detectOS";
import dynamic from "next/dynamic";
import { useCallback, useEffect } from "react";

const Header = dynamic(() => import("headerFooter/header"), {
  ssr: false,
  loading: () => (
    <p style={{ height: "80px", width: "100vw" }}>Loading header...</p>
  ),
});
const Footer = dynamic(() => import("headerFooter/footer"), {
  ssr: false,
  loading: () => (
    <p style={{ height: "80px", width: "100vw" }}>Loading footer...</p>
  ),
});
const Home = dynamic(() => import("home/home"), {
  ssr: false,
  loading: () => (
    <p style={{ height: "1500px", width: "100vw" }}>Loading home...</p>
  ),
});
const CartAside = dynamic(() => import("cart/cartAside"), {
  ssr: false,
  loading: () => <></>,
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
      const customEvent = event as CustomEvent<EventData>;
      sendEvent(customEvent.detail);
    },
    [sendEvent]
  );

  useEffect(() => {
    document.addEventListener(WINDOWS_EVENTS.Analytics, handleAnalyticsEvent);
  }, [handleAnalyticsEvent]);

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
          <Header />
          <Home />
          <Footer />
          <CartAside />
        </ErrorBoundary>
      </main>
    </>
  );
}
