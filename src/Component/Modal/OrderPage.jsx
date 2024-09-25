// import React, { useState, useEffect } from 'react';
// import AuthServices from "../../Services/auth";
// import { getOrderDetails as fetchOrderDetailsFromDB } from "../../Services/database";
// import { getProduct } from "../../Services/database"; // Import the getProduct function
// import { Link, useLocation, useParams } from 'react-router-dom';
// import { getShoes } from '../../Services/database';

// function OrderPage() {
//     const { category, subcategory, subsubcategory } = useParams();
//         const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [orderDetails, setOrderDetails] = useState([]);
//     const [productDetails, setProductDetails] = useState({});
//     const [sortOrder, setSortOrder] = useState('newToOld'); // Add state to manage sort order

//     useEffect(() => {
//         const fetchUserAndOrders = async () => {
//             try {
//                 const user = await AuthServices.getCurrentUser();
//                 const userId = user.$id;
//                 const orders = await fetchOrderDetailsFromDB(userId);
//                 const parsedOrders = orders.map(order => {
//                     const parsedOrderDetails = JSON.parse(order.orderDetails[0]);
//                     return {
//                         ...order,
//                         orderDetails: parsedOrderDetails
//                     };
//                 });

//                 setOrderDetails(parsedOrders);
//                 setUser(user);
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching current user or orders:", err);
//             }
//         };

//         fetchUserAndOrders();
//     }, [category, subcategory, subsubcategory,]);

//     useEffect(() => {
//         const fetchProductImages = async () => {
//             const productMap = {};
//             for (const order of orderDetails) {
//                 for (const item of order.orderDetails.items || []) {
//                     const productId = item.id;
//                     console.log(item)
//                     if (!productMap[productId]) {
//                         const product = await getProduct(productId);
//                         productMap[productId] = product;
//                     }
//                 }
//             }
//             setProductDetails(productMap);
//         };

//         if (orderDetails.length > 0) {
//             fetchProductImages();
//         }
//     }, [orderDetails]);

//     const sortedOrders = [...orderDetails].sort((a, b) => {
//         if (sortOrder === 'newToOld') {
//             return new Date(b.orderDetails.createdAt) - new Date(a.orderDetails.createdAt);
//         } else {
//             return new Date(a.orderDetails.createdAt) - new Date(b.orderDetails.createdAt);
//         }
//     });

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (orderDetails.length === 0) {
//         return <p>No orders found.</p>;
//     }

//     const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     const renderOrderDate = (orderTimeStamp) => {
//         const date = new Date(orderTimeStamp);
//         const year = date.getUTCFullYear();
//         const month = date.getUTCMonth();
//         const day = date.getUTCDate();
//         return `${monthNames[month]} ${day}, ${year}`;
//     };

//     return (
//         <div className="max-w-7xl mx-auto">
//             {/* Page Title */}
//             <div className="mb-12">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-2">Order History</h1>
//                 <p className="text-gray-600">Review past orders, manage returns, and reorder your favorite items.</p>
//             </div>

//             {/* Sorting Dropdown */}
//             <div className="mb-6 flex justify-end">
//                 <select
//                     value={sortOrder}
//                     onChange={(e) => setSortOrder(e.target.value)} // Update sortOrder state on selection
//                     className="border border-gray-300 rounded px-3 py-2 text-gray-700"
//                 >
//                     <option value="newToOld">Newest to Oldest</option>
//                     <option value="oldToNew">Oldest to Newest</option>
//                 </select>
//             </div>

//             {/* Recent Orders Section */}
//             <div className="bg-white shadow rounded-lg">
//                 {sortedOrders.map((order, index) => (
//                     <div key={index} className="p-6 border-b border-gray-200 order-item transition duration-200 ease-in-out hover:shadow-lg">
//                         <h2 className="text-2xl font-semibold mb-4">Order placed on {renderOrderDate(order.orderDetails.createdAt)}</h2>
//                         <div className="flex justify-between items-center mb-6">
//                             <dl className="grid grid-cols-3 gap-x-8 text-gray-600">
//                                 <div>
//                                     <dt className="font-semibold">Order Number</dt>
//                                     <dd>{order.orderId}</dd>
//                                 </div>
//                                 <div>
//                                     <dt className="font-semibold">Date Placed</dt>
//                                     <dd>{renderOrderDate(order.orderDetails.createdAt)}</dd>
//                                 </div>
//                                 <div>
//                                     <dt className="font-semibold">Total Amount</dt>
//                                     <dd>${order.orderDetails.totalAmount || 'N/A'}</dd>
//                                 </div>
//                             </dl>
//                             <div className="space-x-6">
//                                 <a href="#" className="text-blue-600 hover:underline font-medium">View Order</a>
//                                 <a href="#" className="text-blue-600 hover:underline font-medium">View Invoice</a>
//                             </div>
//                         </div>

//                         {/* Items in Order */}
//                         <h4 className="text-xl font-medium mb-3">Items</h4>
//                         <ul className="space-y-8">
//   {(order.orderDetails.items || []).map((item, itemIndex) => {
//     const productId = item.id;
//     const product = productDetails[productId];

//     return (
//       <li key={itemIndex} className="flex items-start space-x-6">
//         <img
//           className="w-24 h-24 object-cover rounded-lg shadow"
//           src={product?.image || "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg"}
//           alt={product?.name || "Product"}
//         />
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h5 className="text-lg font-semibold text-gray-800">{item.name || "Product Name"}</h5>
//               <p className="text-gray-500 font-medium">${item.price || 'N/A'}</p>
//             </div>
//           </div>
//           <p className="text-gray-600 mt-2 leading-relaxed">A compact carry option for your essential everyday items.</p>
//         </div>
//         <div className="flex flex-col justify-between items-end space-y-4">
//           <p className="flex items-center text-green-600 font-medium">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"></path>
//             </svg>
//             Delivered on {renderOrderDate(order.orderDetails.createdAt)}
//           </p>
//           <div className="space-x-4">
//             <Link
//               to={`/${category}/${subcategory}/${subsubcategory}/${productId}`}
//               className="text-blue-600 hover:underline"
//             >
//               View Product
//             </Link>
//             <a href="#" className="text-blue-600 hover:underline">Buy Again</a>
//           </div>
//         </div>
//       </li>
//     );
//   })}
// </ul>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default OrderPage;

// import React, { useState, useEffect } from 'react';
// import AuthServices from "../../Services/auth";
// import { getOrderDetails as fetchOrderDetailsFromDB, getProduct } from "../../Services/database";
// import { Link, useParams } from 'react-router-dom';

// function OrderPage() {
//     // const { category, subcategory, subsubcategory } = useParams();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [orderDetails, setOrderDetails] = useState([]);
//     const [productDetails, setProductDetails] = useState({});
//     const [sortOrder, setSortOrder] = useState('newToOld');

//     useEffect(() => {
//         const fetchUserAndOrders = async () => {
//             try {
//                 const user = await AuthServices.getCurrentUser();
//                 const userId = user.$id;
//                 const orders = await fetchOrderDetailsFromDB(userId);
//                 const parsedOrders = orders.map(order => {
//                     const parsedOrderDetails = JSON.parse(order.orderDetails[0]);
//                     return {
//                         ...order,
//                         orderDetails: parsedOrderDetails
//                     };
//                 });

//                 setOrderDetails(parsedOrders);
//                 setUser(user);
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching current user or orders:", err);
//             }
//         };

//         fetchUserAndOrders();
//     }, []);

//     useEffect(() => {
//         const fetchProductImages = async () => {
//             const productMap = {};
//             for (const order of orderDetails) {
//                 for (const item of order.orderDetails.items || []) {
//                     const productId = item.id;
//                     if (!productMap[productId]) {
//                         const product = await getProduct(productId);
//                         console.log("Fetched product:", product); // Debug log
//                         productMap[productId] = product;
//                     }
//                 }
//             }
//             setProductDetails(productMap);
//         };

//         if (orderDetails.length > 0) {
//             fetchProductImages();
//         }
//     }, [orderDetails]);

//     const sortedOrders = [...orderDetails].sort((a, b) => {
//         if (sortOrder === 'newToOld') {
//             return new Date(b.orderDetails.createdAt) - new Date(a.orderDetails.createdAt);
//         } else {
//             return new Date(a.orderDetails.createdAt) - new Date(b.orderDetails.createdAt);
//         }
//     });

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (orderDetails.length === 0) {
//         return <p>No orders found.</p>;
//     }

//     const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     const renderOrderDate = (orderTimeStamp) => {
//         const date = new Date(orderTimeStamp);
//         const year = date.getUTCFullYear();
//         const month = date.getUTCMonth();
//         const day = date.getUTCDate();
//         return `${monthNames[month]} ${day}, ${year}`;
//     };

//     return (
//         <div className="max-w-7xl mx-auto">
//             {/* Page Title */}
//             <div className="mb-12">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-2">Order History</h1>
//                 <p className="text-gray-600">Review past orders, manage returns, and reorder your favorite items.</p>
//             </div>

//             {/* Sorting Dropdown */}
//             <div className="mb-6 flex justify-end">
//                 <select
//                     value={sortOrder}
//                     onChange={(e) => setSortOrder(e.target.value)}
//                     className="border border-gray-300 rounded px-3 py-2 text-gray-700"
//                 >
//                     <option value="newToOld">Newest to Oldest</option>
//                     <option value="oldToNew">Oldest to Newest</option>
//                 </select>
//             </div>

//             {/* Recent Orders Section */}
//             <div className="bg-white shadow rounded-lg">
//                 {sortedOrders.map((order, index) => (
//                     <div key={index} className="p-6 border-b border-gray-200 order-item transition duration-200 ease-in-out hover:shadow-lg">
//                         <h2 className="text-2xl font-semibold mb-4">Order placed on {renderOrderDate(order.orderDetails.createdAt)}</h2>
//                         <div className="flex justify-between items-center mb-6">
//                             <dl className="grid grid-cols-3 gap-x-8 text-gray-600">
//                                 <div>
//                                     <dt className="font-semibold">Order Number</dt>
//                                     <dd>{order.appOrderId}</dd>
//                                 </div>
//                                 {/* <div>
//                                     <dt className="font-semibold">Payment ID</dt>
//                                     <dd>{order.orderId}</dd>
//                                 </div> */}
//                                 <div>
//                                     <dt className="font-semibold">Date Placed</dt>
//                                     <dd>{renderOrderDate(order.orderDetails.createdAt)}</dd>
//                                 </div>
//                                 <div>
//                                     <dt className="font-semibold">Total Amount</dt>
//                                     <dd>${order.orderDetails.totalAmount || 'N/A'}</dd>
//                                 </div>
//                             </dl>
//                             <div className="space-x-6">
//                                 <a href="#" className="text-blue-600 hover:underline font-medium">View Order</a>
//                                 <a href="#" className="text-blue-600 hover:underline font-medium">View Invoice</a>
//                             </div>
//                         </div>

//                         {/* Items in Order */}
//                         <h4 className="text-xl font-medium mb-3">Items</h4>
//                         <ul className="space-y-8">
//                             {(order.orderDetails.items || []).map((item, itemIndex) => {
//                                 const productId = item.id;
//                                 const product = productDetails[productId];

//                                 // Extract category, subcategory, and subsubcategory from the product details
//                                 const productCategory = product?.Category || 'defaultCategory';
//                                 const productSubcategory = product?.Footwear_Type || 'defaultSubcategory';
//                                 const productSubsubcategory = product?.Variety || 'defaultSubsubcategory';

//                                 return (
//                                     <li key={itemIndex} className="flex items-start space-x-6">
//                                         <img
//                                             className="w-24 h-24 object-cover rounded-lg shadow"
//                                             src={product?.image || "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg"}
//                                             alt={product?.name || "Product"}
//                                         />
//                                         <div className="flex-1">
//                                             <div className="flex justify-between items-start">
//                                                 <div>
//                                                     <h5 className="text-lg font-semibold text-gray-800">{item.name || "Product Name"}</h5>
//                                                     <p className="text-gray-500 font-medium">${item.price || 'N/A'}</p>
//                                                 </div>
//                                             </div>
//                                             <p className="text-gray-600 mt-2 leading-relaxed">A compact carry option for your essential everyday items.</p>
//                                         </div>
//                                         <div className="flex flex-col justify-between items-end space-y-4">
//                                             <p className="flex items-center text-green-600 font-medium">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"></path>
//                                                 </svg>
//                                                 Delivered on {renderOrderDate(order.orderDetails.createdAt)}
//                                             </p>
//                                             <div className="space-x-4">
//                                                 <Link
//                                                     to={`/${productCategory}/${productSubcategory}/${productSubsubcategory}/${productId}`}
//                                                     className="text-blue-600 hover:underline"
//                                                 >
//                                                     View Product
//                                                 </Link>
//                                                 <a href="#" className="text-blue-600 hover:underline">Buy Again</a>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default OrderPage;

import React, { useState, useEffect } from "react";
import AuthServices from "../../Services/auth";
import {
  getOrderDetails as fetchOrderDetailsFromDB,
  getProduct,
} from "../../Services/database";
import { Link } from "react-router-dom";
import InvoiceComponent from "../Invoice/InvoiceComponent";
import OrderPageSkeleton from "./OrderPageSkeleton";

function OrderPage() {
  // const { category, subcategory, subsubcategory } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [sortOrder, setSortOrder] = useState("newToOld");

  useEffect(() => {
    const fetchUserAndOrders = async () => {
      try {
        const user = await AuthServices.getCurrentUser();
        const userId = user.$id;
        const orders = await fetchOrderDetailsFromDB(userId);
        const parsedOrders = orders.map((order) => {
          const parsedOrderDetails = JSON.parse(order.orderDetails[0]);
          return {
            ...order,
            orderDetails: parsedOrderDetails,
          };
        });
        console.log("ParsedOrders: ", parsedOrders);
        setOrderDetails(parsedOrders);
        setUser(user);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching current user or orders:", err);
      }
    };

    fetchUserAndOrders();
  }, []);
  console.log("orderDetails : ", orderDetails);
  useEffect(() => {
    const fetchProductImages = async () => {
      const productMap = {};
      for (const order of orderDetails) {
        for (const item of order.orderDetails.items || []) {
          const productId = item.id;
          if (!productMap[productId]) {
            const product = await getProduct(productId);
            console.log("Fetched product:", product);
            productMap[productId] = product;
          }
        }
      }
      setProductDetails(productMap);
    };

    if (orderDetails.length > 0) {
      fetchProductImages();
    }
  }, [orderDetails]);

  console.log(orderDetails);

  const sortedOrders = [...orderDetails].sort((a, b) => {
    if (sortOrder === "newToOld") {
      return (
        new Date(b.orderDetails.createdAt) - new Date(a.orderDetails.createdAt)
      );
    } else {
      return (
        new Date(a.orderDetails.createdAt) - new Date(b.orderDetails.createdAt)
      );
    }
  });

  if (loading) {
    return <OrderPageSkeleton />;
  }

  if (orderDetails.length === 0) {
    return <p>No orders found.</p>;
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderOrderDate = (orderTimeStamp) => {
    const date = new Date(orderTimeStamp);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    return `${monthNames[month]} ${day}, ${year}`;
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="mb-12">
        <h1 className="text-4xl mt-3 font-bold text-gray-800 mb-2">
          Order History
        </h1>
        <p className="text-gray-600">
          Review past orders, manage returns, and reorder your favorite items.
        </p>
      </div>

      {/* Sorting Dropdown */}
      <div className="mb-6 flex justify-end">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-gray-700"
        >
          <option value="newToOld">Newest to Oldest</option>
          <option value="oldToNew">Oldest to Newest</option>
        </select>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white shadow rounded-lg">
        {sortedOrders.map((order, index) => (
          <div
            key={index}
            className="p-6 border-b border-gray-200 order-item transition duration-200 ease-in-out hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Order placed on {renderOrderDate(order.orderDetails.createdAt)}
            </h2>
            <div className="flex justify-between items-center mb-6">
              <dl className="grid grid-cols-3 gap-x-8 text-gray-600">
                <div>
                  <dt className="font-semibold">Order Number</dt>
                  <dd>{order.appOrderId}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Date Placed</dt>
                  <dd>{renderOrderDate(order.orderDetails.createdAt)}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Total Amount</dt>
                  <dd>${order.orderDetails.totalAmount || "N/A"}</dd>
                </div>
              </dl>
              <div className="flex space-x-6">
                <Link
                  to={`/view-order/${order.appOrderId}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  View Order
                </Link>
                <InvoiceComponent orderId={order.appOrderId} />{" "}
                {/* <-- Render the InvoicePage component */}
              </div>
            </div>

            {/* Items in Order */}
            <h4 className="text-xl font-medium mb-3">Items</h4>
            <ul className="space-y-8">
              {(order.orderDetails.items || []).map((item, itemIndex) => {
                const productId = item.id;
                const product = productDetails[productId];

                console.log("Productdetails", product);
                let productCategory = product?.Category;
                let productSubcategory = product?.Footwear_Type;
                let productSubsubcategory = product?.Variety;

                return (
                  <li key={itemIndex} className="flex items-start space-x-6">
                    <img
                      className="w-24 h-24 object-cover rounded-lg shadow"
                      src={product?.image || "/blankwhite.jpg"}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-lg font-semibold text-gray-800">
                            {item.name || "Product Name"}
                          </h5>
                          <p className="text-gray-500 font-medium">
                            ${item.price || "N/A"}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        A compact carry option for your essential everyday
                        items.
                      </p>
                    </div>
                    <div className="flex flex-col justify-between items-end space-y-4">
                      <p className="flex items-center text-green-600 font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          ></path>
                        </svg>
                        Confirmed on{" "}
                        {renderOrderDate(order.orderDetails.createdAt)}
                      </p>
                      <div className="space-x-4">
                        {
                          productCategory !== undefined ? (
                            <Link
                              to={`/shops/${productCategory}/${productSubcategory}/${productSubsubcategory}/${productId}`}
                              className="text-blue-600 hover:underline"
                            >
                              View Product
                            </Link>
                          ) : null 
                        }

                        <Link
                          to={`/my/CheckoutForm/${productId}`}
                          className="text-blue-600 hover:underline"
                        >
                          Buy Again
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
