"use strict";

/** @type {import('next').NextConfig} */
var _require = require('@module-federation/nextjs-mf'),
    NextFederationPlugin = _require.NextFederationPlugin;

var environments = {
  DEVELOPMENT: 'DEVELOPMENT',
  PRODUCTION: 'PRODUCTION',
  STAGING: 'STAGING'
};

var getRemotesEntries = function getRemotesEntries(entry) {
  var env = process.env.NEXT_PUBLIC_ENV || environments.DEVELOPMENT;

  switch (entry) {
    case 'home':
      if (env === environments.DEVELOPMENT) return "home@".concat(process.env.NEXT_PUBLIC_HOME_URI_DEV, "/_next/static");
      if (env === environments.STAGING) return "home@".concat(process.env.NEXT_PUBLIC_HOME_URI_STG, "/_next/static");
      break;

    case 'cart':
      if (env === environments.DEVELOPMENT) return "cart@".concat(process.env.NEXT_PUBLIC_CART_URI_DEV, "/_next/static");
      if (env === environments.STAGING) return "cart@".concat(process.env.NEXT_PUBLIC_CART_URI_STG, "/_next/static");
      break;

    case 'header':
      if (env === environments.DEVELOPMENT) return "headerFooter@".concat(process.env.NEXT_PUBLIC_HEADER_URI_DEV, "/_next/static");
      if (env === environments.STAGING) return "headerFooter@".concat(process.env.NEXT_PUBLIC_HEADER_URI_STG, "/_next/static");
      break;

    case 'plp':
      if (env === environments.DEVELOPMENT) return "plp@".concat(process.env.NEXT_PUBLIC_PLP_URI_DEV, "/_next/static");
      if (env === environments.STAGING) return "plp@".concat(process.env.NEXT_PUBLIC_PLP_URI_STG, "/_next/static");
      break;

    case 'pdp':
      if (env === environments.DEVELOPMENT) return "pdp@".concat(process.env.NEXT_PUBLIC_PDP_URI_DEV, "/_next/static");
      if (env === environments.STAGING) return "pdp@".concat(process.env.NEXT_PUBLIC_PDP_URI_STG, "/_next/static");
      break;
  }
};

var remotes = function remotes(isServer) {
  var location = isServer ? 'ssr' : 'chunks';
  var headerFooterURI = "".concat(getRemotesEntries('header'), "/").concat(location, "/remoteEntry.js");
  var homeURI = "".concat(getRemotesEntries('home'), "/").concat(location, "/remoteEntry.js");
  var cartURI = "".concat(getRemotesEntries('cart'), "/").concat(location, "/remoteEntry.js");
  var plpURI = "".concat(getRemotesEntries('plp'), "/").concat(location, "/remoteEntry.js");
  var pdpURI = "".concat(getRemotesEntries('pdp'), "/").concat(location, "/remoteEntry.js");
  return {
    home: homeURI,
    headerFooter: headerFooterURI,
    cart: cartURI,
    plp: plpURI,
    pdp: pdpURI
  };
};

var nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**"
    }]
  },
  webpack: function webpack(config, options) {
    config.plugins.push(new NextFederationPlugin({
      name: 'host',
      filename: 'static/chunks/remoteEntry.js',
      remotes: remotes(options.isServer),
      exposes: {},
      extraOptions: {
        exposePages: true,
        automaticAsyncBoundary: true
      }
    }));
    return config;
  }
};
module.exports = nextConfig;