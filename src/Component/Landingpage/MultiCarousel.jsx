import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cards = [
    {
      image: "src/assets/minicard/MenCollection.jpg",
      title: "Men Collection",
      discount: "Upto 50% off",
      description: "Get the best Deal",
      to: "/MenCollection",
    },
    {
      image: "src/assets/minicard/women card.jpg",
      title: "Women Collection",
      discount: "Upto 50% off",
      description: "Get the best Deal For Women",
      to: "/WomenCollection",
    },
    {
      image: "src/assets/minicard/kids.jpg",
      title: "Kids Collection",
      discount: "Upto 50% off",
      description: "Get the best Deal For Kids",
      to: "/KidsCollection",
    },
    {
      image: "src/assets/minicard/FormalsCollection.jpg",
      title: "Formals Collection",
      discount: "Upto 30% off",
      description: "Get the best Deal For Formals Shoes",
      to: "/FormalsCollection",
    },
    {
      image: "src/assets/minicard/sportCollection.jpg",
      title: "Sports Collection",
      discount: "Upto 40% off",
      description: "Get the best Deal For Sports Shoes",
      to: "/SportsCollection",
    },
    {
      image: "src/assets/minicard/schoolCollection.jpg",
      title: "School Collection",
      discount: "Upto 40% off",
      description: "Get the best Deal For School Shoes",
      to: "/SchoolCollection",
    },
  ];

  const slideInterval = useRef(null);
  const totalCards = cards.length;

  const startAutoSlide = () => {
    slideInterval.current = setInterval(handleNext, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval.current);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    const transitionEnd = () => {
      setIsAnimating(false);

      if (currentIndex === totalCards) {
        // Jump back to the first card (no animation)
        setCurrentIndex(0);
      } else if (currentIndex === -1) {
        // Jump to the last card (no animation)
        setCurrentIndex(totalCards - 1);
      }
    };

    const timer = setTimeout(transitionEnd, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, totalCards]);

  return (
    <div
      className="mt-2 relative max-w-7xl mx-auto overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="relative">
        <div
          className={`flex transition-transform duration-500 ease-in-out transform ${
            isAnimating ? "" : "transition-none"
          }`}
          style={{
            transform: `translateX(-${
              ((currentIndex + totalCards) % totalCards) * (100 / 3)
            }%)`,
          }}
        >
          {cards.concat(cards).map((card, index) => (
            <div
              className="flex-none w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md m-3 transform transition-transform duration-500 hover:scale-105 h-72"
              key={index}
            >
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={card.image}
                alt="Card"
              />
              <div className="absolute inset-0 rounded-2xl bg-gray-900 bg-opacity-0 hover:bg-opacity-80 transition-all duration-500 flex flex-col justify-center items-center p-4 text-center opacity-0 hover:opacity-100">
              <h3 className="text-xl text-white font-semibold mb-2 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-xl text-yellow-300 font-bold mb-2">
                    {card.discount}
                  </p>
                  <p className="text-sm text-gray-200 mb-4">
                    {card.description}
                  </p>
                  <Link
                    to={card.to}
                    className="bg-orange-500 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
                  >
                    Buy Now
                  </Link>
                </div>
              {/* </div> */}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 absolute inset-x-0 top-1/2 transform -translate-y-1/2">
          <button
            className="carousel-button left"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="carousel-button right"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
