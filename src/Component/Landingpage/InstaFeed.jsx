import React from 'react';

function InstagramFeed() {
  return (
    <div className="bg-black  text-white p-4">
      <h1 className="text-5xl font-extrabold text-center p-4">INSTAGRAM FEED</h1>
      <div className="flex justify-center items-center mt-8 relative space-x-4">
        {/* Left Small Image */}
        <div className="w-1/4 border  rounded-lg max-w-sm">
          <div className="bg-white shadow-lg  rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="/shoe-1.png"
              alt="Sneaker"
            />
            <div className="p-4 bg-white">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Profile"
                />
                <div>
                  <h5 className="font-bold text-black">SpectraZen
                  </h5>
                  <span className="text-xs text-gray-500">Verified</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-400">
              These shoes have been a game-changer! They’ve held up incredibly well over the past year. Highly recommend for anyone looking for durable footwear. 🌟👢
              </p>
            </div>
          </div>
        </div>

        {/* Center Large Image */}
        <div className="w-1/2 max-w-md">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-80 object-cover"
              src="/shoe-3.png"
              alt="Sneaker"
            />
            <div className="p-4 bg-white">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Profile"
                />
                <div>
                  <h5 className="font-bold text-black">VortexWanderer</h5>
                  <span className="text-xs text-gray-500">Verified</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-400">
              Absolutely in love with these sneakers! They’re so comfortable, I can wear them all day without any discomfort. Perfect for my daily runs and casual outings! 🏃‍♂️👟
              </p>
            </div>
          </div>
        </div>

        {/* Right Small Image */}
        <div className="w-1/4border max-w-sm rounded-lg bg-white">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="/shoe-5.png"
              alt="Sneaker"
            />
            <div className="p-4 bg-white">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="Profile"
                />
                <div>
                  <h5 className="font-bold text-black">PixelPioneer</h5>
                  <span className="text-xs text-gray-500">Verified</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-400">
              Loving the chic design of these new sneakers. They’re not only stylish but also get tons of compliments! 🎨👟
              The price is a bit higher, but the comfort and longevity make them worth every penny. Definitely a great investment! 💰👞
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramFeed;
