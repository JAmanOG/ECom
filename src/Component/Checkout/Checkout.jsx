import { Link, useNavigate } from "react-router-dom";
import useFetchCheckout from "./useFetchCheckout"; // Import the custom hook

const Checkout = () => {
  const { checkout, productDetails, loading } = useFetchCheckout();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="m-3">
        <Link className="flex font-bold" to={`/`}>
          <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
          <span>Back to Home</span>
        </Link>
      </div>
      <div className="grid-cols-4 gap-4 grid">
        {checkout.length > 0 ? (
          checkout.map((item) => (
            <div key={item.productId}>
              <div className="p-5 mx-auto my-4 max-w-sm lg:max-w-md overflow-hidden transition-all duration-300 transform hover:scale-105">
                <div className="h-full border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    className="h-48 w-full object-cover"
                    src={
                      productDetails[item.productId]?.image ||
                      "fallback-image-url"
                    }
                    alt={productDetails[item.productId]?.name || "Product"}
                  />
                  <div className="p-4">
                    <h2 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                      {productDetails[item.productId]?.Category || "Loading..."}
                    </h2>
                    <h1 className="text-lg font-bold text-gray-900 mb-2">
                      {productDetails[item.productId]?.name || "Loading..."}
                    </h1>
                    <h5>{item.quantity || "Loading..."}</h5>
                    <div className="flex items-center justify-between">
                      <button className="text-indigo-600 font-semibold hover:text-indigo-800 inline-flex items-center">
                        Add to Cart
                        <svg
                          className="w-5 h-5 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items in your checkout.</p>
        )}
      </div>
    </>
  );
};

export default Checkout;
