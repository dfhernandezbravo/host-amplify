import React from 'react';

interface Props {
  children: React.ReactNode;
}

export interface GetDeviceEvent {
  width: number;
  height: number;
  browserName: string;
  browserVersion: string;
  deviceType: string;
  os: string;
  osVersion?: string;
}

const DeviceProvider: React.FC<Props> = ({ children }) => {
  // const { dispatchDevice } = useDispatchDevice();
  // const device = useDevice();

  // const getDevice = (e: Event) => {
  //   e.stopPropagation();
  //   dispatchDevice(device);
  // };

  // useEffect(() => {
  //   document.addEventListener(DEVICE_EVENTS.DispatchGetDevice, getDevice);
  //   return () => {
  //     document.removeEventListener(DEVICE_EVENTS.DispatchGetDevice, getDevice);
  //   };
  // }, [getDevice]);

  return children;
};

export default DeviceProvider;
