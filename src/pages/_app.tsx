import '@/presentation/assets/styles/globals.css';
import AnalyticsProvider from '@/presentation/providers/analytics';
import ShoppingCartEvents from '@/presentation/providers/shopping-cart-events';
import StoreProvider from '@/presentation/providers/store';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <AnalyticsProvider>
          <ShoppingCartEvents>
            <Component {...pageProps} />
          </ShoppingCartEvents>
        </AnalyticsProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
}
