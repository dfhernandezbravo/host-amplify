import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('headerFooter/header'), { ssr: false, loading: () => <p>Loading header...</p> })
const Footer = dynamic(() => import('headerFooter/footer'), { ssr: false, loading: () => <p>Loading footer...</p>})
const Home = dynamic(() => import('home/home'), { ssr: false, loading: () => <p>Loading home...</p> })
const CartAside = dynamic(() => import('cart/cartAside'), { ssr: false, loading: () => <p>Loading cart...</p> })

export default function HomeApp() {
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
  )
}
