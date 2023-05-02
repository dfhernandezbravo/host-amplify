/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  const homeURI = `home@http://localhost:3002/_next/static/${location}/remoteEntry.js`;
  const headerFooterURI = `headerFooter@http://localhost:3001/_next/static/${location}/remoteEntry.js`;
  return {
    home: homeURI,
    headerFooter: headerFooterURI,
  }
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack(config, options){
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        exposes: {},
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
