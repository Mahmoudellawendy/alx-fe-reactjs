import React from 'react';
import UserProfile from './UserProfile';
function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '300px' }}>
      <UserProfile name="Ali" age={30} bio="Loves traveling and exploring cities." />
      <UserProfile name="Sara" age={25} bio="Enjoys historical architecture and museums." />
      <UserProfile name="Omar" age={28} bio="Fan of street food and local culture." />
    </main>
  );
}
export default MainContent;
