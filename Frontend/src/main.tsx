import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppRoutes from './AppRoutes'; 
import Auth0ProviderWithNavigation from './auth/Auth0ProviderWithNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }  
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigation>
      <AppRoutes />
        </Auth0ProviderWithNavigation> 
        </QueryClientProvider>
    </Router>
  </React.StrictMode>,
);
