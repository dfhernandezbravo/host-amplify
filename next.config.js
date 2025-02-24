/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const getRemotesEntries = (entry) => {
  switch (entry) {
    case 'home':
      return `home@${process.env.NEXT_PUBLIC_HOME_URI}/_next/static`;
    case 'cart':
      return `cart@${process.env.NEXT_PUBLIC_CART_URI}/_next/static`;
    case 'header':
      return `headerFooter@${process.env.NEXT_PUBLIC_HEADER_URI}/_next/static`;
    case 'plp':
      return `plp@${process.env.NEXT_PUBLIC_PLP_URI}/_next/static`;
    case 'pdp':
      return `pdp@${process.env.NEXT_PUBLIC_PDP_URI}/_next/static`;
    case 'confirmation':
      return `confirmation@${process.env.NEXT_PUBLIC_ORDERPLACED_URI}/_next/static`;
    case 'account':
      return `account@${process.env.NEXT_PUBLIC_ACCOUNT_URI}/_next/static`;
  }
};

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  const headerFooterURI = `${getRemotesEntries(
    'header',
  )}/${location}/remoteEntry.js`;
  const homeURI = `${getRemotesEntries('home')}/${location}/remoteEntry.js`;
  const confirmationURI = `${getRemotesEntries(
    'confirmation',
  )}/${location}/remoteEntry.js`;
  const accountURI = `${getRemotesEntries(
    'account',
  )}/${location}/remoteEntry.js`;
  const cartURI = `${getRemotesEntries('cart')}/${location}/remoteEntry.js`;
  const plpURI = `${getRemotesEntries('plp')}/${location}/remoteEntry.js`;
  const pdpURI = `${getRemotesEntries('pdp')}/${location}/remoteEntry.js`;
  return {
    home: homeURI,
    confirmation: confirmationURI,
    account: accountURI,
    headerFooter: headerFooterURI,
    cart: cartURI,
    plp: plpURI,
    pdp: pdpURI,
  };
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['easyclqa.vteximg.com.br'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60',
          },
        ],
      },
    ];
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        exposes: {},
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: false,
        },
      }),
    );
    return { ...config };
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    //removeConsole: true,
  },
  ...nextConfig,
});
