import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ReactRouterProvider } from './app/providers/ReactRouterProvider';
import { ReactQueryProvider } from './app/providers/ReactQueryProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactRouterProvider>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </ReactRouterProvider>
  </React.StrictMode>
);
