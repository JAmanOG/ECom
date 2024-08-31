import React from 'react';
import Noticebar from '../NavigationBar/DisplayBar/noticebar.jsx';
import Footer from '../Footer/footer.jsx';
import Main_nav from '../NavigationBar/MainBar/Main_nav.jsx';
import { Outlet } from 'react-router-dom';
import Home from '../Landingpage/Home.jsx';
import BannerCarousel from '../Landingpage/Carousel.jsx';
import CardCarousel from '../Landingpage/CardCarousel.jsx';
import MultiCardCarousel from '../Landingpage/MultiCarousel.jsx';
import PromiseSection from '../Landingpage/PromiseSection.jsx';
import Markstone from '../Landingpage/Markstone.jsx';
import InstagramFeed from '../Landingpage/InstaFeed.jsx';
import HomeCategories from '../Landingpage/HomeCategories.jsx';

const Layout = () => {
  return (
    <>
      <Noticebar />
      {/* <Main_nav /> */}
      <Home />
      <BannerCarousel />
      <MultiCardCarousel />
      {/* <CardCarousel /> */}
      {/* <HomeCategories /> */}
      <InstagramFeed />
      <PromiseSection />
      <Markstone />
            <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
