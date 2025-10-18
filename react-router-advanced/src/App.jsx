import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// صفحة رئيسية بسيطة
function Home() {
  return <h2>Home Page</h2>;
}

// صفحة تسجيل دخول وهمية
function Login() {
  return <h2>Please Login to continue</h2>;
}

// صفحة ملف المستخدم مع nested routes
function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function ProfileDetails() {
  return <div><h3>Profile Details</h3></div>;
}

function ProfileSettings() {
  return <div><h3>Profile Settings</h3></div>;
}

// صفحة منشور مدونة ديناميكية
function BlogPost() {
  const { id } = useParams();
  return <h3>Blog Post ID: {id}</h3>;
}

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/blog/1">Blog Post 1</Link> |{' '}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* الحماية باستخدام ProtectedRoute */}
        <Route 
          path="/profile/*" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* nested routes داخل Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* مسار ديناميكي */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* صفحة تسجيل دخول */}
        <Route path="/login" element={<Login />} />

        {/* صفحة خطأ 404 بسيطة */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
