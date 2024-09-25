import React from "react";

const Markstone = () => {
  return (
    <section className="bg-green-100 flex flex-col sm:flex-row items-center justify-between p-4 sm:p-10">
      {/* Left Section - Shoe and Text */}
      <div className="flex items-center space-x-4 sm:space-x-8 border-r-2 border-gradient-to-r from-cyan-500 to-blue-500">
        <img
          src="/markstoneShoe.png"
          alt="Shoe"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
        />
        <div className="text-gray-700 text-sm sm:text-base">
          <p>We are e-shoe store company that work by providing customers with an online platform to browse and purchase shoes from the comfort of their own home.</p>
        </div>
      </div>

      {/* Right Section - Stats */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-0 space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-400 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg sm:text-2xl">32+</span>
          </div>
          <span className="text-black font-semibold text-sm sm:text-base">SHOES</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-green-400 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg sm:text-2xl">5M+</span>
          </div>
          <span className="text-black font-semibold text-sm sm:text-base">CLIENTS</span>
        </div>
      </div>
    </section>
  );
};

export default Markstone;
