import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import CustomNavBar from '../navbar/CustomNavbar';

function Layout({ children }) {
  const isHomePage = window.location.pathname === '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {isHomePage ? <Navbar /> : <CustomNavBar />}
      <div style={{ flex: 1, padding: '10px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;