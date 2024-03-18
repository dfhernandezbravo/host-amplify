import AnalyticsProvider from '@/presentation/providers/analytics';
import AuthProvider from '@/presentation/providers/auth';
import ShoppingCartEvents from '@/presentation/providers/shopping-cart-events';
import StoreProvider from '@/presentation/providers/store';
import ThemeProvider from '@/presentation/providers/theme';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ProvidersLayout = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <AnalyticsProvider>
            <ShoppingCartEvents>
              <AuthProvider>{children}</AuthProvider>
            </ShoppingCartEvents>
          </AnalyticsProvider>
        </QueryClientProvider>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default ProvidersLayout;
