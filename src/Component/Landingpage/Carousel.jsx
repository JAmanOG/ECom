import React, { useState, useEffect } from 'react';
import './index.css';

const slides = [
    {
        type: 'text',
        title: 'Discover Premium Footwear',
        description: 'Step into comfort and style with our exclusive collection. Perfect for every occasion.',
        buttonText: 'Shop Now',
        buttonLink: '#shop-now',
        backgroundClass: 'bg-gradient-to-r from-blue-500 to-purple-600',
    },
    {
        type: 'image',
        src: './image1.jpeg',
        alt: 'Stylish Sneakers',
        caption: 'Exclusive summer collection',
    },
    {
        type: 'text',
        title: 'Summer Sale',
        description: 'Get up to 50% off on selected items. Limited time offer!',
        buttonText: 'View Sale',
        buttonLink: '#view-sale',
        backgroundClass: 'bg-gradient-to-r from-yellow-500 to-red-600',
    },
    {
        type: 'image',
        src: './image2.jpeg',
        alt: 'New Arrivals',
        caption: 'Latest trends just arrived!',
    },
];

function BannerCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000); // Change slides every 5 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="relative w-full h-80 sm:h-96 xl:h-112 2xl:h-128 overflow-hidden">
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${index === activeIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'} ${slide.type === 'text' ? slide.backgroundClass : ''}`}
                    >
                        {slide.type === 'text' ? (
                            <div className="flex items-center justify-center h-full text-center text-white px-6 md:px-12">
                                <div>
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                                        {slide.description}
                                    </p>
                                    <div className="mt-8">
                                        <a
                                            href={slide.buttonLink}
                                            className="inline-block px-6 py-3 text-base font-medium bg-white text-blue-500 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                        >
                                            {slide.buttonText}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="relative w-full h-full">
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="block w-full h-full object-cover rounded-lg shadow-lg"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center rounded-b-lg">
                                    <p className="text-lg">{slide.caption}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Carousel controls */}
            <button
                onClick={goToPrevSlide}
                type="button"
                className="group absolute left-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
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
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                onClick={goToNextSlide}
                type="button"
                className="group absolute right-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
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
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

export default BannerCarousel;
