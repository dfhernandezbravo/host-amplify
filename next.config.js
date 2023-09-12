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
  }
};

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  const headerFooterURI = `${getRemotesEntries(
    'header',
  )}/${location}/remoteEntry.js`;
  const homeURI = `${getRemotesEntries('home')}/${location}/remoteEntry.js`;
  const cartURI = `${getRemotesEntries('cart')}/${location}/remoteEntry.js`;
  const plpURI = `${getRemotesEntries('plp')}/${location}/remoteEntry.js`;
  const pdpURI = `${getRemotesEntries('pdp')}/${location}/remoteEntry.js`;
  console.log('home uri:', homeURI);
  return {
    home: homeURI,
    headerFooter: headerFooterURI,
    cart: cartURI,
    plp: plpURI,
    pdp: pdpURI,
  };
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
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
          automaticAsyncBoundary: true,
        },
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
