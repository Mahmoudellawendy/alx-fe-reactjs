import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // تأكد من مسار الاستيراد

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // لو مش مسجل دخول، يروح صفحة تسجيل الدخول
    return <Navigate to="/login" replace />;
  }

  // لو مسجل دخول، يرجع المكون اللي جوه
  return children;
};

export default ProtectedRoute;
