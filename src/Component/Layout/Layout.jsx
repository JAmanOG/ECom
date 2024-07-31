import React from 'react';
import Noticebar from '../NavigationBar/DisplayBar/noticebar.jsx';
import Footer from '../Footer/footer.jsx';
import Main_nav from '../NavigationBar/MainBar/Main_nav.jsx';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Noticebar />
      <Main_nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
