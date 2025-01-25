import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

export const ReactRouterProvider: React.FC<{children: ReactNode}> = ({ children }) => (
  <BrowserRouter>
    {children}
    <AppRoutes />
  </BrowserRouter>
);
