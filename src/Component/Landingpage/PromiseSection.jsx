import React from "react";

const PromoSection = () => {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row items-center justify-between py-10 px-6 lg:px-20 bg-gray-100"
      aria-labelledby="promo-section-heading"
    >
      {/* Left Section */}
      <div className="lg:w-1/2 text-center space-y-8 lg:text-left">
        <h3
          id="promo-section-heading"
          className="text-gray-600 font-semibold uppercase mb-3"
        >
          Get Free Delivery
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          Hassle-Free Shopping: <br className="hidden sm:block" /> Free Delivery on Every Purchase!
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
          Shop to your heart’s content and enjoy the luxury of having your items
          delivered right to your doorstep without any extra charges.
        </p>
        <button
          className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition duration-300"
          aria-label="Start Shopping"
        >
          Start Shopping
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 sm:m-auto sm:flex sm:justify-center m-auto flex justify-center relative mb-8 lg:mb-0">
      <div className="">
        
        <img
          src="/Deliveryboy.png"
          alt="Delivery Boy Holding Package"
          className="w-48 sm:w-56 lg:w-80 object-cover mt-3 rounded-lg shadow-lg"
        />
        <div
          className="absolute bottom-2 right-4 sm:right-10 lg:right-16 transform translate-x-1/4 translate-y-1/4 bg-green-500 w-max text-white rounded-full px-3 py-3 flex items-center shadow-lg"
          aria-label="Free Home Delivery"
        >
          <span className="text-xs sm:text-sm lg:text-base">Free Home <br /> Delivery</span>
        </div>
          </div>
        <div
          className="absolute top-2/4 -left-4 sm:-left-8 lg:-left-10 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full px-2 sm:px-4 py-2 flex items-center shadow-lg"
          aria-label="Happy Clients"
        >
          <img
            src="/ClientProfile.png"
            alt="Happy Clients Profile"
            className="w-22 h-8 sm:w-10 sm:h-10 lg:w-1/2 lg:h-14 rounded-full mr-2"
          />
          <div className="text-xs sm:text-sm lg:text-base">
            <span className="block font-bold">20K+</span>
            <span className="text-[10px] sm:text-xs">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
