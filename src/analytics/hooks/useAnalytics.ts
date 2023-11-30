import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';
import { Console } from 'console';

export type EventData = {
  event: string;
  category: string;
  action: string;
  tag: string;
};

interface UseAnalytics {
  sendEvent: (data: EventData) => void;
}

const useAnalytics = (): UseAnalytics => {
  const sendDataToGTM = useGTMDispatch();

  const sendEvent = (data: EventData) => {
    sendDataToGTM(data);
  };

  return {
    sendEvent,
  };
};

export default useAnalytics;
