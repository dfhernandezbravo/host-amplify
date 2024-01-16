import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const sourcegoogleMap = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          type="text/javascript"
          src={sourcegoogleMap}
          strategy="beforeInteractive"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Easy CL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
