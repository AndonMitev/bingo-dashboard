import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import './index.css';
import { SymbolDetailsScreen } from './screens/SymbolDetails';
import { Home } from './screens/Home';
import { WinnersScreen } from './screens/Winners';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/symbol/:symbol',
    element: <SymbolDetailsScreen />
  },
  {
    path: '/winners',
    element: <WinnersScreen />
  }
]);

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
