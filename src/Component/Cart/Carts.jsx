import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import useFetchCheckout from "../Checkout/useFetchCheckout";
import useCheckout from "../Checkout/useCheckout";

function Carts() {
  const { checkout, handleRemove, error, handleIncrement, handleDecrement } = useCheckout();
  const { loading, productDetails } = useFetchCheckout();
  
  if (error) return <div>Error: {error}</div>;
  if (!checkout) return <div>Loading...</div>;

  const calculateTotals = () => {
    let subtotal = 0;
    let savings = 0;

    checkout.forEach((item) => {
      const product = productDetails[item.productId];
      if (product) {
        const originalPrice = product.price || 0;
        const discountedPrice = product.discountedPrice || 0;
        subtotal += discountedPrice * (item.quantity || 1);
        savings += (originalPrice - discountedPrice) * (item.quantity || 1);
      }
    });

    const shipping = 20;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    return { subtotal, savings, shipping, tax, total };
  };

  const { subtotal, savings, shipping, tax, total } = calculateTotals();

  return (
    <div className="body">
      <div className="containerrs">
        <h1 className="text-4xl font-bold mb-10 text-accent">Your Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="col-span-2 cardd">
            <div className="card-body">
              {checkout.length > 0 ? (
                checkout.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center mt-2 rounded-md shadow hover:shadow-lg space-x-8"
                  >
                    <div className="product-image mb-3">
                      <img
                        className="h-40 w-40 object-cover"
                        src={productDetails[item.productId]?.image || "fallback-image-url"}
                        alt="Product"
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="text-md font-semibold mb-1">
                        {productDetails[item.productId]?.Variety || "Unknown Product"}
                      </h6>
                      <h2 className="text-2xl font-semibold mb-2">
                        {productDetails[item.productId]?.name || "Unknown Product"}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <button onClick={() => handleDecrement(item.productId, 1)} className="btn-secondary px-4 py-2 text-lg rounded-lg shadow-md hover:bg-gray-200 transition-colors">-</button>
                          <span className="mx-4 text-xl font-semibold">{item.quantity || 1}</span>
                          <button onClick={() => handleIncrement(item.productId, 1)} className="btn-secondary px-4 py-2 text-lg rounded-lg shadow-md hover:bg-gray-200 transition-colors">+</button>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-semibold text-gray-500 line-through">${productDetails[item.productId]?.price || "0.00"}</p>
                          <p className="text-2xl font-bold text-red-500 mt-1">${productDetails[item.productId]?.discountedPrice || "0.00"}</p>
                          <span className="block text-green-500 text-sm font-semibold mt-1">{productDetails[item.productId]?.discountPercent || "0.00"}% Off</span>
                        </div>
                      </div>
                      <div className="flex space-x-6">
                        <button onClick={() => handleRemove(item.productId)} className="text-lg font-medium text-red-500 hover:text-red-300 transition">
                          <svg className="inline-block h-6 w-6 mr-1" viewBox="0 0 24 24" fill="none">
                            <path d="M6 18L17.94 6M18 18L6.06 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                          Remove
                        </button>
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
          <div className="cardd">
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-accent mb-8">Order Summary</h3>
              <div className="flex justify-between mb-6">
                <span>Original Price</span>
                <span>${subtotal + savings}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span>Savings</span>
                <span className="text-green-500">-${savings}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="divider"></div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="btn-primary w-full mt-8">Proceed to Checkout</button>
              <p className="text-center text-sm text-gray-500 mt-6">
                or{" "}
                <Link className="text-accent hover:underline">Continue Shopping</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Voucher/Gift Card */}
        <div className="mt-10 cardd">
          <div className="card-body">
            <label htmlFor="voucher" className="block text-xl font-semibold mb-4">
              Have a voucher or gift card?
            </label>
            <input
              type="text"
              id="voucher"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-accent text-gray-700 focus:border-accent focus:ring-0"
              placeholder="Enter your code"
            />
            <button className="btn-primary w-full mt-6">Apply Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
