import React, { useEffect, useState } from 'react';
import { getOrderDetails } from '../Invoice/usefetchdata';
import './ViewOrder.css';
import { getProduct } from '../../Services/database';
import InvoiceComponent from '../Invoice/InvoiceComponent';

const ViewOrder = ({ orderId }) => {
  const [productDetails, setProductDetails] = useState({});
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetailsFromDB = async (orderId) => {
      try {
        const orders = await getOrderDetails(orderId); // Assuming getOrderDetails is your API call
        const order = orders.length > 0 ? orders[0] : null;
        if (order && order.OrderData.length > 0) {
          const parsedOrderData = JSON.parse(order.OrderData[0]);
          setOrderDetails({ ...order, parsedOrderData });
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetailsFromDB(orderId);
  }, [orderId]);

  useEffect(() => {
    const fetchProductImages = async () => {
      const productIds = {};

      for (const order of orderDetails?.parsedOrderData || []) {
        for (const item of order.items) {
          if (!productIds[item.productId]) {
            try {
              const product = await getProduct(item.productId); // Assuming getProduct is your API call
              productIds[item.productId] = product;
            } catch (error) {
              console.error("Error fetching product:", error);
            }
          }
        }
      }

      setProductDetails(productIds);
    };

    if (orderDetails?.parsedOrderData?.length > 0) {
      fetchProductImages();
    }
  }, [orderDetails]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!orderDetails || !orderDetails.parsedOrderData) {
    return <p>No order details found for this order.</p>;
  }

  const { parsedOrderData } = orderDetails;

  return (
    <div className="bg-gray-100 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden fade-in">
        <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
          <h1 className="text-2xl font-bold">Order Details</h1>
          <p className="text-lg mt-2">Order #{parsedOrderData[0]?.orderId || "N/A"}</p>
        </div>

        <section aria-labelledby="order-heading" className="p-6">
          <h2 id="order-heading" className="text-xl font-semibold text-gray-800">Order Summary</h2>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-600">Items in Your Order</h3>

            {parsedOrderData[0]?.items?.length > 0 ? (
              parsedOrderData[0].items.map((item, index) => {
                const product = productDetails[item.productId];
                return (
                  <div key={index} className="flex items-start mt-4 space-x-4 fade-in">
                    <img
                      alt={item.productName}
                      src={product?.image}
                      className="w-24 h-24 object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900">
                        <a href="#" className="hover:underline">{item.productName}</a>
                      </h4>
                      <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                      <div className="mt-3">
                        <dl className="text-sm text-gray-600">
                          <div className="flex items-center">
                            <dt className="font-semibold">Quantity:</dt>
                            <dd className="ml-2">{item.quantity}</dd>
                          </div>
                          <div className="flex items-center mt-1">
                            <dt className="font-semibold">Price:</dt>
                            <dd className="ml-2">₹{item.price}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No items found in this order.</p>
            )}
          </div>

          {/* Shipping, Billing, and Payment Information */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-600">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="fade-in">
                <dt className="text-sm font-semibold text-gray-600">Shipping Address</dt>
                <dd className="mt-1 text-sm text-gray-700">
                  <address>
                    <span className="block">{orderDetails.user}</span>
                    <span className="block">{orderDetails.address}</span>
                    <span className="block">{orderDetails.city}, {orderDetails.state}, {orderDetails.country}, {orderDetails.zip}</span>
                  </address>
                </dd>
              </div>
              <div className="fade-in">
                <dt className="text-sm font-semibold text-gray-600">Billing Address</dt>
                <dd className="mt-1 text-sm text-gray-700">
                  <address>
                    <span className="block">{orderDetails.user}</span>
                    <span className="block">{orderDetails.address}</span>
                    <span className="block">{orderDetails.city}, {orderDetails.state}, {orderDetails.country}, {orderDetails.zip}</span>
                  </address>
                </dd>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-600">Payment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="fade-in">
                <dt className="text-sm font-semibold text-gray-600">Payment Method</dt>
                <dd className="mt-1 text-sm text-gray-700">
                  <p>{orderDetails.PaymentMethod} - {parsedOrderData.paymentDetails}</p>
                </dd>
              </div>
              <div className="fade-in">
                <dt className="text-sm font-semibold text-gray-600">Shipping Method</dt>
                <dd className="mt-1 text-sm text-gray-700">
                  <p>{parsedOrderData.shippingMethod}</p>
                </dd>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-600">Order Summary</h3>
            <dl className="mt-4 fade-in">
              <div className="flex justify-between">
                <dt className="text-sm font-semibold text-gray-600">Subtotal</dt>
                <dd className="text-sm text-gray-700">₹{parsedOrderData[0].subtotal}</dd>
              </div>
              <div className="flex justify-between mt-1">
                <dt className="text-sm font-semibold text-gray-600">Discount</dt>
                <dd className="text-sm text-gray-700">-₹{parsedOrderData[0].savings}</dd>
              </div>
              <div className="flex justify-between mt-1">
                <dt className="text-sm font-semibold text-gray-600">Shipping</dt>
                <dd className="text-sm text-gray-700">₹{parsedOrderData[0].shipping}</dd>
              </div>
              <div className="flex justify-between mt-1">
                <dt className="text-sm font-semibold text-gray-600">Tax</dt>
                <dd className="text-sm text-gray-700">₹{parsedOrderData[0].tax}</dd>
              </div>
              <div className="flex justify-between mt-3 border-t border-gray-200 pt-3">
                <dt className="text-md font-semibold text-gray-800">Total</dt>
                <dd className="text-md font-semibold text-gray-800">₹{parsedOrderData[0].totalPrice}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 flex justify-between items-center fade-in">
            <button className="hover-button text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none" onClick={() => cancelOrder(parsedOrderData[0]?.orderId)}>Cancel Order</button>
            {/* <a href="#" className="hover-button text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none">Print/Download Invoice</a> */}
            <InvoiceComponent orderId={parsedOrderData[0]?.orderId || "N/A"} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewOrder;
