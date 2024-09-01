import React from 'react';
import Noticebar from '../NavigationBar/DisplayBar/noticebar.jsx';
import Footer from '../Footer/footer.jsx';
import Main_nav from '../NavigationBar/MainBar/Main_nav.jsx';
import { Outlet } from 'react-router-dom';
import Home from '../Landingpage/Home.jsx';
const Layout = () => {
  return (
    <>
      <Noticebar />
      <Home />
            <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
