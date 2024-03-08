import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';

export type EventData = {
  event: string;
  category: string;
  action: string;
  tag: string;
  page_title: string;
  page: string;
  page_location: string;
};

export type PageViewEventData = {
  event: string;
  page_title: string;
  page: string;
  page_location: string;
};

interface UseAnalytics {
  sendEvent: (data: EventData) => void;
  sendPageViewEvent: (data: PageViewEventData) => void;
}

const useAnalytics = (): UseAnalytics => {
  const sendDataToGTM = useGTMDispatch();

  const sendEvent = (data: EventData) => {
    sendDataToGTM(data);
  };

  const sendPageViewEvent = (data: PageViewEventData) => {
    sendDataToGTM(data);
  };

  return {
    sendEvent,
    sendPageViewEvent,
  };
};

export default useAnalytics;
