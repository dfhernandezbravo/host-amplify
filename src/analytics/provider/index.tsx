import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";

interface Props {
  children: React.ReactNode;
}

const AnalyticsProvider = ({ children }: Props) => {
  return (
    <GTMProvider state={{ id: process.env.NEXT_PUBLIC_GTM_ID || "" }}>
      {children}
    </GTMProvider>
  );
};

export default AnalyticsProvider;
