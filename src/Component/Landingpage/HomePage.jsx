import React from 'react'
import BannerCarousel from '../Landingpage/Carousel.jsx';
import CardCarousel from '../Landingpage/CardCarousel.jsx';
import MultiCardCarousel from '../Landingpage/MultiCarousel.jsx';
import PromiseSection from '../Landingpage/PromiseSection.jsx';
import Markstone from '../Landingpage/Markstone.jsx';
import InstagramFeed from '../Landingpage/InstaFeed.jsx';
import HomeCategories from '../Landingpage/HomeCategories.jsx';

function HomePage() {
  return (
    <>
    <BannerCarousel />
      <MultiCardCarousel />
      <HomeCategories />
      <InstagramFeed />
      <PromiseSection />
      <Markstone />
    </>
  )
}

export default HomePage