import React from 'react';
import { Navigate } from 'react-router-dom';

// دي hook وهمية لفحص حالة تسجيل الدخول
// ممكن تستبدلها بالـ context أو أي طريقة عندك لإدارة حالة المستخدم
const useAuth = () => {
  // هنا مؤقتاً حاطط false عشان يعني مش مسجل دخول
  // ممكن تغيرها لـ true لاختبار دخول المستخدم
  const isAuthenticated = false; 
  return { isAuthenticated };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // لو مش مسجل دخول، نوجّه المستخدم لصفحة تسجيل الدخول
    return <Navigate to="/login" replace />;
  }

  // لو مسجل دخول، نعرض المكونات المحمية (الأطفال)
  return children;
};

export default ProtectedRoute;
