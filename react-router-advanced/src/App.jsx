import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>

        {/* صفحة التسجيل العادية */}
        <Route path="/" element={<RegistrationForm />} />

        {/* صفحة التسجيل باستخدام فورميك */}
        <Route path="/formik" element={<FormikForm />} />

        {/* صفحة تسجيل الدخول */}
        <Route path="/login" element={<Login />} />

        {/* صفحة الملف الشخصي محمية */}
        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        >
          {/* Nested Routes داخل Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* مسار ديناميكي لعرض منشور مدونة */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* أي مسار غير معروف يعيد التوجيه لصفحة التسجيل */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App;
