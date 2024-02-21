import { NextPageContext } from 'next';

const detectOs = async (ctx: NextPageContext) => {
  const isIos = (ctx?.req?.headers['user-agent'] || navigator.userAgent).match(
    /iPhone|iPad|iPod/i,
  );
  const isDesktop = (
    ctx?.req?.headers['user-agent'] || navigator.userAgent
  ).match(/Windows|Macintosh|Ubuntu|Linux/i);
  const isAndroid = (
    ctx?.req?.headers['user-agent'] || navigator.userAgent
  ).match(/Android/i);

  const calculateOs = () => {
    if (isAndroid) {
      return 'ANDROID';
    } else if (isIos) {
      return 'IOS';
    } else if (isDesktop) {
      return 'DESKTOP';
    } else return '';
  };
  if (typeof window !== 'undefined') {
    // Saving on Session storage
    sessionStorage.setItem('isMobile', `${Boolean(isIos || isAndroid)}`);
    sessionStorage.setItem('OS', calculateOs());
  }
  // Returning the props to the component for further use.
  return {
    isMobile: Boolean(isIos || isAndroid),
    OS: calculateOs(),
  };
};

export default detectOs;
