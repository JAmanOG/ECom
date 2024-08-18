import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFetchCheckout from "./useFetchCheckout";
import useCheckout from "./useCheckout";
import useCalculateTotals from "../Cart/useCalculateTotal";

function Checkout() {
  const { loading, productDetails } = useFetchCheckout();
  const { checkout } = useCheckout();
  const navigate = useNavigate();
  const { subtotal, savings, shipping, tax, total } = useCalculateTotals(
    checkout,
    productDetails
  );

  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Billing Address Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-8">
                Billing Address
              </h2>
              {loading ? (
                <>
                  <Skeleton height={40} width="100%" />
                  <Skeleton height={40} width="100%" />
                  <Skeleton height={40} width="100%" />
                </>
              ) : (
                <form className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-600"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="country-name"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="country-name"
                        placeholder="India"
                        name="country-name"
                        className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state-name"
                        className="block text-sm font-medium text-gray-600"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state-name"
                        placeholder="Maharashtra"
                        name="state-name"
                        className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="city-name"
                        className="block text-sm font-medium text-gray-600"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city-name"
                        placeholder="Mumbai"
                        name="city-name"
                        className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phone-number"
                        placeholder="123-456-789"
                        name="phone-number"
                        className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email-id"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Email Id
                      </label>
                      <input
                        type="email"
                        id="email-id"
                        placeholder="abc@xyz.com"
                        name="email-id"
                        className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div></div>
                  </div>
                </form>
              )}
            </div>

            {/* Delivery Address Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-8">
                Delivery Address
              </h2>
              {loading ? (
                <>
                  <Skeleton height={40} width="100%" />
                  <Skeleton height={40} width="100%" />
                  <Skeleton height={40} width="100%" />
                </>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Address
                    </label>
                    <textarea
                      type="text"
                      id="address"
                      placeholder="local address"
                      name="address"
                      className="p-2 mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="street-name"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Street name
                    </label>
                    <input
                      type="text"
                      id="street-name"
                      placeholder="landmark/street"
                      name="street-name"
                      className="mt-3 px-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="note"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Delivery Note
                    </label>
                    <input
                      type="text"
                      id="note"
                      placeholder="Instruction"
                      name="note"
                      className="mt-3 px-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 hover:outline-offset-2  focus:border-blue-600 text-sm sm:text-base"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Payment Details Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-8">
                Payment Details
              </h2>
              {loading ? (
                <>
                  <Skeleton height={40} width="100%" />
                </>
              ) : (
                // Add your payment form or options here
                <div>Your payment form here</div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-8">
              Order Summary
            </h2>
            <div className="space-y-6">
              {loading ? (
                <>
                  <Skeleton height={40} width="100%" />
                  <Skeleton height={40} width="100%" />
                  <Skeleton height={40} width="100%" />
                </>
              ) : checkout.length > 0 ? (
                checkout.map((item) => (
                  <div key={item.productId}>
                    <div className="flex justify-between text-sm sm:text-base">
                      <div>
                        {productDetails[item.productId]?.Variety ||
                          "Loading ..."}
                        <br />
                        <span className="text-gray-700">
                          {productDetails[item.productId]?.name || "Loading ..."}
                        </span>
                      </div>
                      <span className="text-gray-900 font-medium">
                        $
                        {productDetails[item.productId]?.discountedPrice ||
                          "Loading ..."}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items in your cart.</p>
              )}
              {/* Summary Section */}
              {!loading && (
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="font-medium text-gray-900">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      {subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="font-medium text-gray-900">Savings</span>
                    <span className="font-medium text-green-500">
                      {savings.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="font-medium text-gray-900">Shipping</span>
                    <span className="font-medium text-gray-900">
                      {shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="font-medium text-gray-900">Tax</span>
                    <span className="font-medium text-gray-900">
                      {tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg sm:text-xl font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 w-full bg-blue-600 border border-transparent rounded-lg shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Place Order
                  </button>
                  <div className="mt-6 text-center text-sm">
              <button onClick={()=>navigate(-1)} className="text-blue-600 hover:underline focus:outline-none">
                Return to Shopping
              </button>
              </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
