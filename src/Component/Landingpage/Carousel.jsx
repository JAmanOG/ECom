// import React, { useState, useEffect, useCallback } from 'react';
// import './index.css';

// const slides = [
//     {
//         type: 'text',
//         title: 'Discover Premium Footwear',
//         description: 'Step into comfort and style with our exclusive collection. Perfect for every occasion.',
//         buttonText: 'Shop Now',
//         buttonLink: '#shop-now',
//         backgroundClass: 'bg-gradient-to-r from-blue-500 to-purple-600',
//     },
//     {
//         type: 'image',
//         src: './image1.jpeg',
//         alt: 'Stylish Sneakers',
//         caption: 'Exclusive summer collection',
//     },
//     {
//         type: 'text',
//         title: 'Summer Sale',
//         description: 'Get up to 50% off on selected items. Limited time offer!',
//         buttonText: 'View Sale',
//         buttonLink: '#view-sale',
//         backgroundClass: 'bg-gradient-to-r from-yellow-500 to-red-600',
//     },
//     {
//         type: 'image',
//         src: './image2.jpeg',
//         alt: 'New Arrivals',
//         caption: 'Latest trends just arrived!',
//     },
//     {
//         type: 'custom-banner',
//         backgroundClass: 'bg-yellow-500',
//         imageSrc: './path-to-your-image/shoe-image.png',
//         title: 'MENS FOOTWEAR SHOES',
//         buttonText: 'Shop Now',
//         buttonLink: '#shop-now',
//         url: 'www.graphicsfamily.com',
//
//     },
// ];

// function BannerCarousel() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);

//     const goToNextSlide = useCallback(() => {
//         setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, []);

//     const goToPrevSlide = () => {
//         setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//     };

//     useEffect(() => {
//         if (!isPaused) {
//             const interval = setInterval(goToNextSlide, 5000);
//             return () => clearInterval(interval);
//         }
//     }, [goToNextSlide, isPaused]);

//     const handleMouseEnter = () => setIsPaused(true);
//     const handleMouseLeave = () => setIsPaused(false);

//     const handleSwipe = (direction) => {
//         if (direction === 'left') goToNextSlide();
//         else if (direction === 'right') goToPrevSlide();
//     };

//     return (
//         <div
//             className="relative w-full h-80 sm:h-96 xl:h-112 2xl:h-128 overflow-hidden z-0"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             <div className="relative w-full h-full">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
//                             index === activeIndex
//                                 ? 'opacity-100 scale-100 z-10'
//                                 : 'opacity-0 scale-95 z-0'
//                         } ${slide.type === 'text' || slide.type === 'custom-banner' ? slide.backgroundClass : ''}`}
//                     >
//                         {slide.type === 'text' ? (
//                             <div className="flex items-center justify-center h-full text-center text-white px-6 md:px-12">
//                                 <div>
//                                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                                         {slide.title}
//                                     </h1>
//                                     <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
//                                         {slide.description}
//                                     </p>
//                                     <div className="mt-8">
//                                         <a
//                                             to={slide.buttonLink}
//                                             className="inline-block px-6 py-3 text-base font-medium bg-white text-blue-500 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
//                                             aria-label={slide.title}
//                                         >
//                                             {slide.buttonText}
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ) : slide.type === 'custom-banner' ? (
//                             <div className="flex items-center justify-between h-full px-6 md:px-12 relative">
//                                 <div className="flex flex-col space-y-6">
//                                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
//                                         {slide.title}
//                                     </h1>
//                                     <a
//                                         to={slide.buttonLink}
//                                         className="inline-block w-max px-6 py-3 bg-black text-white rounded-full text-lg font-semibold shadow-md hover:bg-gray-800 transition-colors"
//                                         aria-label={slide.title}
//                                     >
//                                         {slide.buttonText}
//                                     </a>
//                                 </div>
//                                 <div className="relative">
//                                     <img
//                                         src={slide.imageSrc}
//                                         alt="Men's Footwear Shoe"
//                                         className="w-80 h-auto drop-shadow-lg"
//                                         loading="lazy"
//                                     />
//                                 </div>
//                                 <div className="absolute bottom-4 right-4 flex items-center space-x-2">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-6 w-6 text-black"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M3 5h18M3 10h18m-9 5h9"
//                                         />
//                                     </svg>
//                                     <p className="text-black text-lg">{slide.contactNumber}</p>
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="relative w-full h-full">
//                                 <img
//                                     src={slide.src}
//                                     alt={slide.alt}
//                                     className="block w-full h-full object-cover rounded-lg shadow-lg"
//                                     loading="lazy"
//                                 />
//                                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center rounded-b-lg">
//                                     <p className="text-lg">{slide.caption}</p>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             {/* Carousel controls */}
//             <button
//                 onClick={goToPrevSlide}
//                 type="button"
//                 className="group absolute left-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
//                 aria-label="Previous slide"
//             >
//                 <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white transition duration-300">
//                     <svg
//                         className="h-4 w-4 text-blue-500"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 6 10"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 1 1 5l4 4"
//                         />
//                     </svg>
//                 </span>
//             </button>

//             <button
//                 onClick={goToNextSlide}
//                 type="button"
//                 className="group absolute right-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
//                 aria-label="Next slide"
//             >
//                 <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white transition duration-300">
//                     <svg
//                         className="h-4 w-4 text-blue-500"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 6 10"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="m1 9 4-4-4-4"
//                         />
//                     </svg>
//                 </span>
//             </button>
//         </div>
//     );
// }

// export default BannerCarousel;

import React, { useState, useEffect, useCallback } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const slides = [
  {
    type: "custom-banner",
    layout: "layout1",
    imageSrc: "/sports.png",
    title: "Sport Shoes Collection",
    buttonText: "Shop Now",
    buttonLink: "/special/SportsCollectionMen",
  },
  {
    type: "custom-banner",
    layout: "layout2",
    imageSrc: "/formals.png",
    title: "Elegant Formal Footwear",
    buttonText: "Browse Collection",
    buttonLink: "/special/FormalCollection",
  },
  {
    type: "custom-banner",
    layout: "layout3",
    imageSrc: "/casualsneaker.png",
    title: "Casual Comfort Shoes",
    buttonText: "Explore Now",
    buttonLink: "/shops/men/casual_shoes",
  },
  {
    type: "custom-banner",
    layout: "layout4",
    imageSrc: "/sneakers.png",
    title: "Limited Edition Sneakers",
    buttonText: "Get Yours Now",
    buttonLink: "/shops/men/casual_shoes/sneakers",
  },
  {
    type: "custom-banner",
    layout: "layout5",
    imageSrc: "/froJackMenChelseaBoots1.png",
    title: "Winter Collection",
    buttonText: "Stay Warm & Stylish",
    buttonLink: "/shops/men/boots/chelsea-boots",
  },
  // Additional banners
  {
    type: "custom-banner",
    layout: "layout6",
    imageSrc: "/MenSandals.png",
    title: "Trendy Summer Sandals",
    buttonText: "Shop Summer Styles",
    buttonLink: "/shops/men/sandals",
  },
  {
    type: "custom-banner",
    layout: "layout7",
    imageSrc: "/runningshoe.png",
    title: "Running Shoes for All",
    buttonText: "Find Your Fit",
    buttonLink: "/shops/men/athletic_footwear/running-shoes",
  },
  {
    type: "custom-banner",
    layout: "layout8",
    imageSrc: "/womencollection.png",
    title: "Women Collection",
    buttonText: "Women Collection",
    buttonLink: "/shops/women",
  },
  {
    type: "custom-banner",
    layout: "layout9",
    imageSrc: "/schoolshoe.png",
    title: "Back to School - Up to 30% Off",
    buttonText: "Grab the Deal",
    buttonLink: "/shops/KIDS/school_shoes",
  },
];

function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [goToNextSlide, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative w-full h-80 sm:h-96 xl:h-112 2xl:h-128 overflow-hidden z-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
              index === activeIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 z-0"
            }`}
          >
            {slide.type === "custom-banner" ? (
              slide.layout === "layout1" ? (
                <div className="flex items-center justify-center h-full px-6 md:px-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg">
                  <div className="flex flex-col space-y-4 text-center">
                    <h1 className="text-5xl font-extrabold text-white">
                      {slide.title}
                    </h1>
                    <Link
                      to={slide.buttonLink}
                      className="inline-block px-6 py-3 bg-white text-black rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition-colors"
                      aria-label={slide.title}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                  <div className="relative">
                    <img
                      src={slide.imageSrc}
                      alt={slide.title}
                      className="w-min h-max m-2 drop-shadow-lg rounded-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : slide.layout === "layout2" ? (
                <div className="flex items-center h-full px-6 md:px-12 bg-blue-100">
                  <div className="relative w-1/2 h-full">
                    <img
                      src={slide.imageSrc}
                      alt={slide.title}
                      className="w-min h-min object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center w-1/2 px-8 text-center">
                    <h1 className="text-5xl font-semibold text-black">
                      {slide.title}
                    </h1>
                    <p className="mt-2 text-lg text-gray-700">
                      Stylish and comfortable footwear for every occasion.
                    </p>
                    <Link
                      to={slide.buttonLink}
                      className="inline-block px-6 py-3 bg-green-500 text-white rounded-full text-lg font-semibold shadow-md hover:bg-green-600 transition-colors mt-4"
                      aria-label={slide.title}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>
              ) : slide.layout === "layout3" ? (
                <div className="flex flex-row items-center justify-center h-full bg-purple-300 p-6 rounded-lg shadow-lg">
    {/* Text Content */}
    <div className="flex flex-col justify-center w-1/2 pr-8">
        <h1 className="text-6xl font-extrabold text-white mb-4">
            {slide.title}
        </h1>
        <p className="text-lg text-left text-white mb-4">
            Experience ultimate comfort with our casual collection.
        </p>
        <Link
            to={slide.buttonLink}
            className="inline-block w-max mt-4 px-6 py-3 bg-white text-purple-700 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors"
            aria-label={slide.title}
        >
            {slide.buttonText}
        </Link>
    </div>

    {/* Image */}
    <div className="w-1/2 flex justify-center">
        <img
            src={slide.imageSrc}
            alt={slide.title}
            className="w-min h-min drop-shadow-lg"
            loading="lazy"
        />
    </div>
</div>

              ) : slide.layout === "layout4" ? (
                <div className="flex items-center justify-center h-full px-6 md:px-12 bg-red-400 rounded-lg shadow-lg">
                  <div className="flex flex-col justify-center w-1/2">
                    <h1 className="text-5xl font-bold text-white">
                      {slide.title}
                    </h1>
                    <Link
                      to={slide.buttonLink}
                      className="inline-block px-6 py-3 bg-black text-white rounded-full text-lg font-semibold w-max shadow-md hover:bg-gray-800 transition-colors mt-4"
                      aria-label={slide.title}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                  <div className="relative w-1/2">
                    <img
                      src={slide.imageSrc}
                      alt={slide.title}
                      className="w-min h-min object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : slide.layout === "layout5" ? (
                <div className="flex flex-row items-center justify-center z-20 h-full bg-blue-600 rounded-lg shadow-lg p-8">
                  {/* Text Content */}
                  <div className="flex flex-col justify-center w-1/2 pr-8">
                    <h1 className="text-6xl font-extrabold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-left text-white mb-4">
                      Stay stylish this winter!
                    </p>
                    <Link
                      to={slide.buttonLink}
                      className="inline-block mt-4 w-max px-6 py-3 bg-white text-blue-700 rounded-full text-lg font-semibold hover:bg-blue-500 transition-colors"
                      aria-label={slide.title}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="w-1/2 flex justify-center">
                    <img
                      src={slide.imageSrc}
                      alt={slide.title}
                      className="w-min h-min drop-shadow-lg rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : slide.layout === "layout6" ? (
                <div className="flex items-center justify-center h-full px-6 md:px-12 bg-yellow-400 rounded-lg shadow-lg">
                  <div className="flex flex-col justify-center w-1/2">
                    <h1 className="text-5xl font-bold text-black">
                      {slide.title}
                    </h1>
                    <Link
                      to={slide.buttonLink}
                      className="inline-block px-6 py-3 bg-black text-white rounded-full w-max text-lg font-semibold shadow-md hover:bg-gray-800 transition-colors mt-4"
                      aria-label={slide.title}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                  <div className="relative w-1/2">
                    <img
                      src={slide.imageSrc}
                      alt={slide.title}
                      className="w-min h-min object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : slide.layout === "layout7" ? (
                <div className="flex flex-row items-center justify-center h-full bg-green-500 p-6 rounded-lg shadow-lg">
    {/* Text Content */}
    <div className="flex flex-col justify-center w-1/2 pr-8">
        <h1 className="text-6xl font-extrabold text-white mb-4">
            {slide.title}
        </h1>
        <p className="text-lg text-left text-white mb-4">
            Find your perfect running companion.
        </p>
        <Link
            to={slide.buttonLink}
            className="inline-block mt-4 w-max px-6 py-3 bg-white text-green-700 rounded-full text-lg font-semibold hover:bg-green-400 transition-colors"
            aria-label={slide.title}
        >
            {slide.buttonText}
        </Link>
    </div>

    {/* Image */}
    <div className="w-1/2 flex justify-center">
        <img
            src={slide.imageSrc}
            alt={slide.title}
            className="w-min h-min drop-shadow-lg"
            loading="lazy"
        />
    </div>
</div>

              ) : slide.layout === "layout8" ? (
                <div className="flex flex-row items-center justify-center h-full bg-pink-500 p-6 rounded-lg shadow-lg">
    {/* Text Content */}
    <div className="flex flex-col justify-center w-1/2 pr-8">
        <h1 className="text-6xl font-extrabold text-white mb-4">
            {slide.title}
        </h1>
        <p className="text-lg text-left text-white mb-4">
            Don't miss out on this limited-time offer!
        </p>
        <Link
            to={slide.buttonLink}
            className="inline-block mt-4 w-max px-6 py-3 bg-white text-pink-700 rounded-full text-lg font-semibold hover:bg-pink-400 transition-colors"
            aria-label={slide.title}
        >
            {slide.buttonText}
        </Link>
    </div>

    {/* Image */}
    <div className="w-1/2 flex justify-center">
        <img
            src={slide.imageSrc}
            alt={slide.title}
            className="w-min h-min mb-5 drop-shadow-lg"
            loading="lazy"
        />
    </div>
</div>

              ) : slide.layout === "layout9" ? (
                <div className="flex flex-row items-center justify-center h-full bg-gray-800 p-6 rounded-lg shadow-lg">
    {/* Text Content */}
    <div className="flex flex-col ml-10 justify-center w-1/2 pr-8">
        <h1 className="text-6xl font-extrabold text-white mb-4">
            {slide.title}
        </h1>
        <p className="text-lg text-left text-white mb-4">
            Durable and stylish for every job!
        </p>
        <Link
            to={slide.buttonLink}
            className="inline-block mt-4 w-max px-6 py-3 bg-white text-gray-800 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors"
            aria-label={slide.title}
        >
            {slide.buttonText}
        </Link>
    </div>
    
    {/* Image */}
    <div className="w-1/2 flex justify-center">
        <img
            src={slide.imageSrc}
            alt={slide.title}
            className="w-min h-min drop-shadow-lg"
            loading="lazy"
        />
    </div>
</div>

              ) : null
            ) : null}
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        onClick={goToPrevSlide}
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
        aria-label="Previous slide"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white transition duration-300">
          <svg
            className="h-4 w-4 text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      <button
        onClick={goToNextSlide}
        type="button"
        className="group absolute right-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
        aria-label="Next slide"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white transition duration-300">
          <svg
            className="h-4 w-4 text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default BannerCarousel;
