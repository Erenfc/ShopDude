import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1, padding: '10px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
