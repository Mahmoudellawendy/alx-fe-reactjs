import React from 'react';
import { Navigate } from 'react-router-dom';

// محاكاة حالة تسجيل الدخول
const isAuthenticated = () => {
  return localStorage.getItem('loggedIn') === 'true';
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
