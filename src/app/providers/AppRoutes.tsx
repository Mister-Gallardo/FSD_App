import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home/ui/HomePage';
import { CartPage } from '../../pages/cart/ui/CartPage';
import { ProfilePage } from '../../pages/profile/ui/ProfilePage';

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="*" element={<div>404 - Page Not Found</div>} />
  </Routes>
);
