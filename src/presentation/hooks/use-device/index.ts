/* eslint-disable complexity */
import { useEffect, useState } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export type UseDeviceHookResp = {
  deviceType: DeviceType;
  os: string;
  osVersion: string | undefined;
  browserName: string;
  browserVersion: string;
  width: number;
  height: number;
};

const useDevice = (): UseDeviceHookResp => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const userAgent = window.navigator.userAgent;
  let browserName = 'Unknown';
  let browserVersion = 'Unknown';
  let osName = 'Unknown';
  let osVersion: string | undefined = undefined;
  let deviceType = 'desktop' as DeviceType;

  if (userAgent.includes('Firefox')) {
    const match = userAgent.match(/Firefox\/([\d.]+)/);
    browserName = 'Firefox';
    browserVersion = match ? match[1] : 'Unknown';
  }

  if (userAgent.includes('Chrome')) {
    const match = userAgent.match(/Chrome\/([\d.]+)/);
    browserName = 'Chrome';
    browserVersion = match ? match[1] : 'Unknown';
  }

  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    const match = userAgent.match(/Version\/([\d.]+) Safari/);
    browserName = 'Safari';
    browserVersion = match ? match[1] : 'Unknown';
  }

  if (userAgent.includes('Windows')) osName = 'Windows';

  if (userAgent.includes('Mac OS')) osName = 'Mac OS';

  if (userAgent.includes('Android')) {
    const match = userAgent.match(/Android\s([\d.]+)/);
    osName = 'Android';
    osVersion = match ? match[1] : undefined;
  }
  if (userAgent.includes('Linux')) osName = 'Linux';
  if (userAgent.includes('iOS') || userAgent.includes('iPhone')) osName = 'iOS';

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    )
  )
    deviceType = 'mobile' as DeviceType;

  if (/iPad|Tablet/i.test(userAgent)) deviceType = 'tablet' as DeviceType;

  return {
    deviceType,
    os: osName,
    osVersion,
    browserName,
    browserVersion,
    width: dimensions.width,
    height: dimensions.height,
  };
};

export default useDevice;
