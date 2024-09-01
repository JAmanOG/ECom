import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { appwriteService } from "../../Services/database";
import ProductDetailsSkeleton from "./ProductSkeleton";
import useCheckout from "../Checkout/useCheckout";

const Product = () => {
  const {
    checkout,
    handleCheckout,
    handleRemove,
    handleIncrement,
    handleDecrement,
    isInCart,
  } = useCheckout();

  const { category, subcategory, subsubcategory, slugg } = useParams();
  const { tag, slugs } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let fetchedProduct = null;

        if (slugg) {
          fetchedProduct = await appwriteService.getPost(slugg);
        } else if (tag && slugs) {
          fetchedProduct = await appwriteService.getTagsdata(slugs);
        }
        
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          navigate("/404");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slugg, tag, slugs, navigate]);

  if (loading) return <ProductDetailsSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6">
     <div className="mb-4">
  {!slugs ? (
    <>
      {subcategory ? (
        <>
          {subsubcategory ? (
            <Link
              className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
              to={`/shops/${category}/${subcategory}/${subsubcategory}`}
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>
              <span className="ml-1">Back to {subsubcategory.replace(/-/g, " ")}</span>
            </Link>
          ) : (
            <Link
              className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
              to={`/shops/${category}/${subcategory}`}
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>
              <span className="ml-1">Back to {subcategory.replace(/-/g, " ")}</span>
            </Link>
          )}
        </>
      ) : (
        <Link
          className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
          to={`/shops/${category}`}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
          <span className="ml-1">Back to {category.replace(/-/g, " ")}</span>
        </Link>
      )}
    </>
  ) : (
    <Link
      className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
      to={`/${tag}`}
    >
      <span className="material-symbols-outlined">arrow_back_ios</span>
      <span className="ml-1">Back to {tag.replace(/-/g, " ")}</span>
    </Link>
  )}
</div>


      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container mx-auto px-5 py-12">
          <div className="lg:w-4/5 mx-auto flex flex-wrap shadow-lg rounded-lg bg-white p-6">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-min h-min object-cover object-center rounded-lg"
              src={appwriteService.getFilePreview(product.featuredImage)}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-400 tracking-widest uppercase">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-2">
                {product.name}
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill={i < 4 ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className={`w-5 h-5 ${
                        i < 4 ? "text-yellow-500" : "text-gray-400"
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-3 text-sm">4 Reviews</span>
              </div>

              <div className="flex items-center mb-5">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600">Color</span>
                  {["border-gray-300", "bg-gray-700", "bg-indigo-500"].map(
                    (color, index) => (
                      <button
                        key={index}
                        className={`border-2 ${color} rounded-full w-6 h-6 focus:outline-none`}
                      ></button>
                    )
                  )}
                </div>
                <div className="flex items-center ml-6">
                  <span className="text-gray-600 mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                {product.discountPercent > 0 ? (
                  <div className="flex items-center space-x-3">
                    <span className="title-font font-semibold text-2xl text-indigo-600">
                      ${product.discountedPrice}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <strike>
                        <span className="text-lg">${product.price}</span>
                      </strike>
                      <span className="ml-2 text-sm">
                        {product.discountPercent}% Off
                      </span>
                    </span>
                  </div>
                ) : (
                  <span className="title-font font-semibold text-2xl text-indigo-600">
                    ${product.price}
                  </span>
                )}

                <div className="flex justify-center w-full items-center space-x-2">
                  {!isInCart[product.$id] ? (
                    <button
                      onClick={() => handleCheckout(product.$id, 1)}
                      className="w-max py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleIncrement(product.$id, 1)}
                        className="py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                        type="button"
                      >
                        +
                      </button>
                      <div className="flex items-center justify-center w-12 h-10 bg-gray-200 text-gray-900 font-semibold rounded-lg">
                        {checkout.find((item) => item.productId === product.$id)?.quantity || 0}
                      </div>
                      <button
                        onClick={() => handleDecrement(product.$id, 1)}
                        className="py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                        type="button"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleRemove(product.$id)}
                        className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gray-300 transition">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>

              <div className="flex mt-5">
                <span className="text-gray-600">Share:</span>
                <span className="flex ml-4 space-x-3"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
