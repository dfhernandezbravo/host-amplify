import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import dynamic from "next/dynamic";
import HomeSkeleton from "@/presentation/components/layouts/HomeSkeleton/HomeSkeleton";
import HeaderSkeleton from "@/presentation/components/layouts/HeaderSkeleton/HeaderSkeleton";
import FooterSkeleton from "@/presentation/components/layouts/FooterSkeleton/FooterSkeleton";

const Header = dynamic(() => import("headerFooter/header"), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});
const Landing = dynamic(() => import("home/landingN0"), {
  ssr: false,
  loading: () => <></>,
});
const Footer = dynamic(() => import("headerFooter/footer"), {
  ssr: false,
  loading: () => <FooterSkeleton />,
});
const CartAside = dynamic(() => import("cart/cartAside"), {
  ssr: false,
  loading: () => <></>,
});

const LandingN0 = () => {
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
          <Landing />
          <Footer />
          <CartAside />
        </ErrorBoundary>
      </main>
    </>
  );
};
export default LandingN0;
