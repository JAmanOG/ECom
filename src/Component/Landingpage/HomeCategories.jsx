import React, { useEffect, useState } from 'react';
import { gettag } from '../../Services/database';
import { appwriteService } from '../../Services/database';
import useCheckout from '../Checkout/useCheckout';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProductCard = ({ product }) => {
  const {
    checkout,
    handleCheckout,
    handleRemove,
    isInCart,
  } = useCheckout();
    return (
      <div className="max-w-sm rounded font-poppins overflow-hidden shadow-lg">
        <div className="relative">
          <img
            className="w-full h-48 object-contain transition-transform duration-300 ease-in-out transform hover:scale-105" // Fixed height, contain image, and add zoom on hover
            src={product.featuredImage ? appwriteService.getFilePreview(product.featuredImage) : product.name}
            alt={product.name}
          />
          {product.Tags==='new_arrival' && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded">
              NEW
            </div>
          )}
          {product.hot === 'hot' && (
            <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded">
              HOT
            </div>
          )}
          <div className="absolute top-2 right-12 bg-gray-100 p-1 rounded-full">
            <button>
              <svg
                className="h-6 w-6 text-purple-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-red-500 font-bold">₹{product.discountedPrice}</span>
            <span className="line-through text-gray-500">₹{product.price}</span>
            {!isInCart[product.$id] ? (
              <button onClick={()=>handleCheckout(product.$id,1)} className="bg-purple-500 text-white px-4 py-2 rounded">Add to Cart</button>
            ): (
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleRemove(product.$id)}>Remove</button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  

  const ProductGrid = ({ filteredProducts }) => {
    const [showAll, setShowAll] = useState(false);
  
    const handleShowAll = () => setShowAll(true);
    const handleShowLess = () => setShowAll(false);
  
    const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);
  
    return (
      <div className="p-6">
        <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product, index) => (
            <CSSTransition
              key={product.$id} // Use a unique key for each product
              timeout={500} // Duration of the animation
              classNames="fade-slide" // CSS class for the animation
            >
              <ProductCard product={product} />
            </CSSTransition>
          ))}
        </TransitionGroup>
        {filteredProducts.length > 8 && (
          <div className="flex justify-center mt-6">
            {!showAll ? (
              <button 
                onClick={handleShowAll} 
                className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105">
                Show All
              </button>
            ) : (
              <button 
                onClick={handleShowLess} 
                className="bg-red-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105">
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    );
  };
  

  function HomeCategories() {
    const [tag, setTag] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [active, setActive] = useState('All');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await gettag(tag, 'null'); // Exclude "sale" products
          setFilteredProducts(response);
        } catch (error) {
          console.log('Error:', error);
        }
      };
      fetchData();
    }, [tag]);
  
    const handleButtonClick = (selectedTag, label) => {
      setTag(selectedTag);
      setActive(label);
    };
  
    return (
      <div className="HomeCategories">
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-lg shadow-lg">
          <h1 className="text-center font-poppins font-extrabold text-3xl tracking-wide">Recommended</h1>
        </header>
        <main className="bg-white p-6 rounded-b-lg shadow-lg">
          <div className="flex justify-center space-x-3 font-poppins mb-6">
            {[
              { label: 'All', value: '' },
              { label: 'New Arrivals', value: 'new_arrival' },
              { label: 'Hot', value: 'hot' },
              { label: 'Featured', value: 'featured' },
              { label: 'Best Seller', value: 'best_seller' },
              { label: 'Sales', value: 'sale' },
            ].map((category) => (
              <button
                key={category.label}
                onClick={() => handleButtonClick(category.value, category.label)}
                className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${
                  active === category.label
                    ? 'bg-[#0096FF] text-white shadow-md transform scale-105'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <ProductGrid filteredProducts={filteredProducts} />
        </main>
      </div>
    );
  }
  
  export default HomeCategories;