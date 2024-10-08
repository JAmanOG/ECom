// import React from "react";
// import { Link } from "react-router-dom";
// import "./Cart.css";
// import useFetchCheckout from "../Checkout/useFetchCheckout";
// import useCheckout from "../Checkout/useCheckout";
// import useCalculateTotals from "./useCalculateTotal";  // Import the custom hook
// import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";

// function Carts() {
//   const navigate = useNavigate();

//   const { checkout, handleRemove, error, handleIncrement, handleDecrement } =
//     useCheckout();
//   const { loading, productDetails } = useFetchCheckout();

//   if (error) return <div>Error: {error}</div>;
//   if (!checkout) return <div>Loading...</div>;

//   // Use the custom hook to calculate totals
//   const { subtotal, savings, shipping, tax, total } = useCalculateTotals(
//     checkout,
//     productDetails
//   );

//   return (
//     <div className="body">
//       <div className="containerrs">
//         <h1 className="text-4xl font-bold mb-10 text-accent">
//           Your Shopping Cart
//         </h1>

//         <div className="grid lg:grid-cols-3 gap-10">
//           <div className="col-span-2 cardd">
//             <div className="card-body">
//               {checkout.length > 0 ? (
//                 checkout.map((item) => (
//                   <div
//                     key={item.productId}
//                     className="flex items-center mt-2 rounded-md shadow hover:shadow-lg space-x-8"
//                   >
//                     <div className="product-image mb-3">
//                       <img
//                         className="h-40 w-40 object-cover"
//                         src={
//                           productDetails[item.productId]?.image ||
//                           "fallback-image-url"
//                         }
//                         alt="Product"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h6 className="text-md font-semibold mb-1">
//                         {productDetails[item.productId]?.Variety ||
//                           "Unknown Product"}
//                       </h6>
//                       <h2 className="text-2xl font-semibold mb-2">
//                         {productDetails[item.productId]?.name ||
//                           "Unknown Product"}
//                       </h2>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <button
//                             onClick={() => handleDecrement(item.productId, 1)}
//                             className="btn-secondary px-4 py-2 text-lg rounded-lg shadow-md hover:bg-gray-200 transition-colors"
//                           >
//                             -
//                           </button>
//                           <span className="mx-4 text-xl font-semibold">
//                             {item.quantity || 1}
//                           </span>
//                           <button
//                             onClick={() => handleIncrement(item.productId, 1)}
//                             className="btn-secondary px-4 py-2 text-lg rounded-lg shadow-md hover:bg-gray-200 transition-colors"
//                           >
//                             +
//                           </button>
//                         </div>
//                         <div className="text-right">
//                           <p className="text-xl font-semibold text-gray-500 line-through">
//                             ${productDetails[item.productId]?.price || "0.00"}
//                           </p>
//                           <p className="text-2xl font-bold text-red-500 mt-1">
//                             $
//                             {productDetails[item.productId]?.discountedPrice ||
//                               "0.00"}
//                           </p>
//                           <span className="block text-green-500 text-sm font-semibold mt-1">
//                             {productDetails[item.productId]?.discountPercent ||
//                               "0.00"}
//                             % Off
//                           </span>
//                         </div>
//                       </div>
//                       <div className="flex space-x-6">
//                         <button
//                           onClick={() => handleRemove(item.productId)}
//                           className="text-lg font-medium text-red-500 hover:text-red-300 transition"
//                         >
//                           <svg
//                             className="inline-block h-6 w-6 mr-1"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                           >
//                             <path
//                               d="M6 18L17.94 6M18 18L6.06 6"
//                               stroke="currentColor"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                             />
//                           </svg>
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p>No items in your cart.</p>
//               )}
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className="cardd">
//             <div className="card-body">
//               <h3 className="text-2xl font-semibold text-accent mb-8">
//                 Order Summary
//               </h3>
//               <div className="flex justify-between mb-6">
//                 <span>Original Price</span>
//                 <span>${subtotal + savings}</span>
//               </div>
//               <div className="flex justify-between mb-6">
//                 <span>Savings</span>
//                 <span className="text-green-500">-${savings}</span>
//               </div>
//               <div className="flex justify-between mb-6">
//                 <span>Shipping</span>
//                 <span>${shipping}</span>
//               </div>
//               <div className="flex justify-between mb-6">
//                 <span>Tax</span>
//                 <span>${tax.toFixed(2)}</span>
//               </div>
//               <div className="divider"></div>
//               <div className="flex justify-between text-xl font-bold">
//                 <span>Total</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//               <Button
//                 component={Link}
//                 to="/my/CheckoutPage"
//                 className="btn-primary"
//               >
//                 Proceed to Checkout
//               </Button>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 or{" "}
//                 <button onClick={()=>navigate(-1)} className="focus:outline-none text-accent hover:underline">
//                   Continue Shopping
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Voucher/Gift Card */}
//         <div className="mt-10 cardd">
//           <div className="card-body">
//             <label
//               htmlFor="voucher"
//               className="block text-xl font-semibold mb-4"
//             >
//               Have a voucher or gift card?
//             </label>
//             <input
//               type="text"
//               id="voucher"
//               className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-accent text-gray-700 focus:border-accent focus:ring-0"
//               placeholder="Enter your code"
//             />
//             <button className="btn-primary w-full mt-6">Apply Code</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carts;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Cart.css";
import useFetchCheckout from "../Checkout/useFetchCheckout";
import useCheckout from "../Checkout/useCheckout";
import useCalculateTotals from "./useCalculateTotal";
import { Button } from "@mui/material";

function Carts() {
  const navigate = useNavigate();
  const { checkout, handleRemove, error, handleIncrement, handleDecrement } =
    useCheckout();
  const { loading, productDetails } = useFetchCheckout();

  if (error) return <div>Error: {error}</div>;

  const { subtotal, savings, shipping, tax, total } = useCalculateTotals(
    checkout,
    productDetails
  );

  return (
    <div className="body">
      <div className="containerrs">
        <h1 className="text-4xl font-bold mb-10 text-accent">
          Your Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="col-span-2 cardd">
            <div className="card-body">
              {loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center mt-2 rounded-md shadow space-x-8"
                  >
                    <Skeleton height={160} width={160} />
                    <div className="flex-1">
                      <Skeleton height={30} width={`60%`} />
                      <Skeleton
                        height={40}
                        width={`80%`}
                        style={{ marginTop: "1rem" }}
                      />
                      <Skeleton
                        height={25}
                        width={`30%`}
                        style={{ marginTop: "1rem" }}
                      />
                    </div>
                  </div>
                ))
              ) : checkout.length > 0 ? (
                checkout.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center mt-2 pb-3 rounded-md shadow hover:shadow-lg space-x-8"
                  >
                    <div className="product-image mb-3">
                      <img
                        className="h-40 w-40 object-cover"
                        src={
                          productDetails[item.productId]?.image ||
                          "fallback-image-url"
                        }
                        alt="Product"
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="text-md font-semibold mb-1">
                        {productDetails[item.productId]?.Variety ||
                          "Unknown Product"}
                      </h6>
                      <h2 className="text-2xl font-semibold mb-2">
                        {productDetails[item.productId]?.name ||
                          "Unknown Product"}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleDecrement(item.productId, 1)}
                            className="btn-secondary px-4 py-2 text-lg rounded-lg shadow-md hover:bg-gray-200 transition-colors"
                          >
                            -
                          </button>
                          <span className="mx-4 text-xl font-semibold">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => handleIncrement(item.productId, 1)}
                            className="btn-secondary px-4 py-2 text-lg rounded-lg shadow-md hover:bg-gray-200 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-semibold text-gray-500 line-through">
                            ${productDetails[item.productId]?.price || "0.00"}
                          </p>
                          <p className="text-2xl font-bold text-red-500 mt-1">
                            $
                            {productDetails[item.productId]?.discountedPrice ||
                              "0.00"}
                          </p>
                          <span className="block text-green-500 text-sm font-semibold mt-1">
                            {productDetails[item.productId]?.discountPercent ||
                              "0.00"}
                            % Off
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-6">
                        <button
                          onClick={() => handleRemove(item.productId)}
                          className="text-lg font-medium text-red-500 hover:text-red-300 transition"
                        >
                          <svg
                            className="inline-block h-6 w-6 mr-1"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 18L17.94 6M18 18L6.06 6"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                          Remove
                        </button>
                        <Link
                          to={`/my/CheckoutForm/${item.productId}`}
                          className="text-lg flex font-medium text-blue-500 hover:text-emerald-300 transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-shopping-cart inline-block mr-2"
                            width="24"
                          >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a1 1 0 0 0 1 .61h9.72a1 1 0 0 0 1-.76l3.38-10.1H5.62"strokeWidth="2">
                            
                            </path>
                          </svg>
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items in your cart.</p>
              )}
            </div>
          </div>
          {/* Order Summary */}
          {checkout.length > 0 ? (
            <div className="cardd">
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-accent mb-8">
                  Order Summary
                </h3>
                {loading ? (
                  <>
                    <Skeleton height={30} width={`50%`} />
                    <Skeleton
                      height={30}
                      width={`50%`}
                      style={{ marginTop: "1rem" }}
                    />
                    <Skeleton
                      height={30}
                      width={`50%`}
                      style={{ marginTop: "1rem" }}
                    />
                    <Skeleton
                      height={30}
                      width={`50%`}
                      style={{ marginTop: "1rem" }}
                    />
                    <Skeleton
                      height={30}
                      width={`50%`}
                      style={{ marginTop: "1rem" }}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex justify-between mb-6">
                      <span>Original Price</span>
                      <span>₹{subtotal + savings}</span>
                    </div>
                    <div className="flex justify-between mb-6">
                      <span>Savings</span>
                      <span className="text-green-500">-₹{savings}</span>
                    </div>
                    <div className="flex justify-between mb-6">
                      <span>Shipping</span>
                      <span>₹{shipping}</span>
                    </div>
                    <div className="flex justify-between mb-6">
                      <span>Tax</span>
                      <span>₹{tax.toFixed(2)}</span>
                    </div>
                    <div className="divider"></div>
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                    <Button
                      component={Link}
                      to="/my/CheckoutForm"
                      className="btn-primary"
                      disabled={loading}
                    >
                      Proceed to Checkout
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-6">
                      or{" "}
                      <button
                        onClick={() => navigate(-1)}
                        className="focus:outline-none text-accent hover:underline"
                      >
                        Continue Shopping
                      </button>
                    </p>
                  </>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* Voucher/Gift Card */}
        <div className="mt-10 cardd">
          <div className="card-body">
            {loading ? (
              <Skeleton height={30} width={`100%`} />
            ) : (
              <>
                <label
                  htmlFor="voucher"
                  className="block text-xl font-semibold mb-4"
                >
                  Have a voucher or gift card?
                </label>
                <input
                  type="text"
                  id="voucher"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-accent text-gray-700 focus:border-accent focus:ring-0"
                  placeholder="Enter your code"
                />
                <button className="btn-primary w-full mt-6">Apply Code</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
