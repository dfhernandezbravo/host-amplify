import useMediaQuery from './useMediaQuery';

type Device = 'Phone' | 'Tablet' | 'Desktop';

interface UseBreakpoints {
  device: Device;
}

export default function useDevice(): UseBreakpoints {
  const breakpoints = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
  };

  if (breakpoints.isXs) return { device: 'Phone' };
  if (breakpoints.isSm) return { device: 'Phone' };
  if (breakpoints.isMd) return { device: 'Tablet' };
  if (breakpoints.isLg) return { device: 'Desktop' };

  return { device: 'Phone' };
}
