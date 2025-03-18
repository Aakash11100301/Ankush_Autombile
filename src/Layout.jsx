import React from 'react';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      {/* Add padding-top to prevent content from hiding behind the fixed header */}
      <main className="pt-24">  
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
