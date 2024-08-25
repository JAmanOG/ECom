import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { databases } from "../../Services/database";
import conf from "../../Services/conf";

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderId, PaymentId, orderDetails, ConsumerName,user} = location.state || {};

  const [dataStored, setDataStored] = useState(false);

  // Extract and format the date
  const timespan = orderDetails.createdAt;
  const date = new Date(timespan);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1; // Months are zero-indexed, so add 1
  const day = date.getUTCDate();

  // Prepare data
  const orderDetail = [JSON.stringify(orderDetails)];
  const orderTimeStamp = JSON.stringify(timespan);
  const data = {
    orderId: orderId,
    user: user,
    PaymentId: PaymentId,
    orderDetails: orderDetail,
    ConsumerName: ConsumerName,
    orderTimeStamp: orderTimeStamp,
    status: "Order Placed",
  };

  useEffect(() => {
    const storeData = async () => {
      try {
        console.log("Storing data");
        // Check if the data has already been stored
        const existingDocument = await databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteOrderDetailsCollectionId,
          [/* Filters can be applied here if needed */]
        );
        const isDocumentStored = existingDocument.documents.some(doc => doc.orderId === orderId);

        if (!isDocumentStored) {
          await databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteOrderDetailsCollectionId,
            "unique()",
            data
          );
          setDataStored(true);
        } else {
          setDataStored(true);
        }
      } catch (error) {
        console.error("Error storing data:", error);
      }
    };

    storeData();
  }, [orderId, data]); // Trigger effect only when orderId or data changes

  const handleDownloadPDF = () => {
    const element = document.getElementById('invoice');
    const options = {
      margin: 1,
      filename: `Order_${orderId}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="container orderConformationContainer mx-auto p-4">
      <div id='invoice' className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mt-10 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-green-500 m-auto text-white rounded-full p-4">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className='text-xl font-semibold mb-4'><strong>{ConsumerName}</strong></h1>
        <h1 className="text-3xl font-semibold mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-6">Your order ID is <strong>{orderId}</strong>.</p>
        <p className="text-gray-600 mb-6">Your Payment ID is <strong>{PaymentId}</strong>.</p>

        <div id="order-summary" className="bg-gray-100 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          {orderDetails.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          ))}
          <div className="flex justify-between font-semibold mt-4">
            <p>Total</p>
            <p>${orderDetails.totalAmount}</p>
          </div>
          <div>
            <p className='text-lg text-gray-800 font-bold my-2'>
              Order Date: {`${day}/${month}/${year}`}
            </p>
          </div>
        </div>

        <Link data-html2canvas-ignore="true"
          to="/track-order"
          className="bg-blue-600 mr-2 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors mb-4 inline-block"
        >
          Track Your Order
        </Link>

        <Link data-html2canvas-ignore="true"
          to="/"
          className="bg-gray-600 mr-2 text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors inline-block"
        >
          Continue Shopping
        </Link>

        <button data-html2canvas-ignore="true"
          onClick={handleDownloadPDF}
          className="mt-4 py-2 px-4 rounded-lg bg-green-600 text-white font-semibold text-center hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
