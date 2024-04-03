import { DEVICE_EVENTS } from '@/application/infra/events/custom-hooks/device';
import { GetDeviceEvent } from '@/presentation/providers/device';

const useDispatchDevice = () => {
  const dispatchDevice = (devicesAndDimensions: GetDeviceEvent) => {
    const eventDispatch = new CustomEvent<GetDeviceEvent>(
      DEVICE_EVENTS.GetDevice,
      {
        detail: devicesAndDimensions,
      },
    );

    document.dispatchEvent(eventDispatch);
    window.dispatchEvent(eventDispatch);
  };

  return { dispatchDevice };
};

export default useDispatchDevice;
