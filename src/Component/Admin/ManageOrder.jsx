// import React, { useState, useEffect } from "react";
// import { getAllOrderDetails } from "../../Services/database";

// const ManageOrder = () => {
//   const [orderDetails, setOrderDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     const fetchUserAndOrders = async () => {
//       try {
//         const orders = await getAllOrderDetails();
//         const parsedOrders = orders.map(order => {
//           const parsedOrderDetails = JSON.parse(order.orderDetails[0]);
//           return {
//             ...order,
//             orderDetails: parsedOrderDetails
//           };
//         });
//         console.log("ParsedOrders: ", parsedOrders);
//         setOrderDetails(parsedOrders);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setLoading(false);
//       }
//     };

//     fetchUserAndOrders();
//   }, []);

//   const totalPages = Math.ceil(orderDetails.length / itemsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleStatusChange = (id, newStatus) => {
//     // Implement status change logic here
//     console.log(`Order ${id} status changed to ${newStatus}`);
//     // You can update the order status in your state or send an update to the server here
//   };

//   const currentItems = orderDetails.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const statusColors = {
//     "Restitute": "bg-yellow-200 text-yellow-600",
//     "Complete": "bg-green-200 text-green-600",
//     "Continue": "bg-blue-200 text-blue-600",
//     "Canceled": "bg-red-200 text-red-600",
//   };

//   const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
//   const renderOrderDate = (orderTimeStamp) => {
//     const date = new Date(orderTimeStamp);
//     const year = date.getUTCFullYear();
//     const month = date.getUTCMonth();
//     const day = date.getUTCDate();
//     return `${monthNames[month]} ${day}, ${year}`;
//   };

//   if (loading) {
//     return <p>Loading...</p>; // Replace with a loading spinner if necessary
//   }

//   if (orderDetails.length === 0) {
//     return <p>No orders found.</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-4">
//         <input
//           type="text"
//           placeholder="Search orders..."
//           className="border rounded-md px-4 py-2 w-1/2"
//         />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
//           Export as .xlsx
//         </button>
//       </div>
//       <table className="min-w-full bg-white border">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 border-b text-left">Order ID</th>
//             <th className="px-6 py-3 border-b text-left">Customer</th>
//             <th className="px-6 py-3 border-b text-left">Order</th>
//             <th className="px-6 py-3 border-b text-left">Delivery Date</th>
//             <th className="px-6 py-3 border-b text-left">Delivery Pricing</th>
//             <th className="px-6 py-3 border-b text-left">Delivery Status</th>
//             <th className="px-6 py-3 border-b text-left">Payment Method</th>
//             <th className="px-6 py-3 border-b text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((order, index) => (
//             <tr key={order.$id} className="hover:bg-gray-100">
//               <td className="px-6 py-4 border-b">{order.id}</td>
//               <td className="px-6 py-4 border-b">{order.customer}</td>
//               <td className="px-6 py-4 border-b">{order.order}</td>
//               <td className="px-6 py-4 border-b">{renderOrderDate(order.date)}</td>
//               <td className="px-6 py-4 border-b">{order.pricing}</td>
//               <td className="px-6 py-4 border-b">
//                 <span className={`px-2 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
//                   {order.status}
//                 </span>
//               </td>
//               <td className="px-6 py-4 border-b">{order.payment}</td>
//               <td className="px-6 py-4 border-b">
//                 <div className="relative">
//                   <select
//                     onChange={(e) => handleStatusChange(order.id, e.target.value)}
//                     className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     defaultValue={order.status}
//                   >
//                     <option value="Processing">Processing</option>
//                     <option value="Out of Delivery">Out of Delivery</option>
//                     <option value="Delivered">Delivered</option>
//                     <option value="Canceled">Canceled</option>
//                   </select>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ManageOrder;


import React, { useState, useEffect } from "react";
import { getAllOrderDetails } from "../../Services/database";
import { appwriteService } from "../../Services/database";
const ManageOrder = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchUserAndOrders = async () => {
      try {
        const orders = await getAllOrderDetails();
        const parsedOrders = orders.map(order => {
          const parsedOrderDetails = JSON.parse(order.orderDetails[0]);
          return {
              ...order,
              orderDetails: parsedOrderDetails
          };
      });
      console.log("ParsedOrders: ",parsedOrders)
      setOrderDetails(parsedOrders);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setLoading(false);
      }
    };

    fetchUserAndOrders();
  }, []);

  const totalPages = Math.ceil(orderDetails.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleStatusChange = async ($id, newStatus) => {
    try {
      setOrderDetails(prevOrders =>
        prevOrders.map(order =>
          order.$id === $id ? { ...order, status: newStatus } : order
        )
      );
  
      await appwriteService.updatePost($id, newStatus);
      alert("Success");
      
      console.log(`Order ${$id} status changed to ${newStatus}`);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };
  

  const currentItems = orderDetails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  
  const statusColors = {
    "Processing": "bg-yellow-200 text-yellow-600",
    "Out of Delivery": "bg-blue-200 text-blue-600",
    "Delivered": "bg-green-200 text-green-600",
    "Canceled": "bg-red-200 text-red-600",
  };


const renderOrderDate = (orderTimeStamp) => {
  if (!orderTimeStamp) return "Date not available"; // Handle missing date

  const date = new Date(orderTimeStamp);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth(); // This will return a zero-indexed month
  const day = date.getUTCDate();

  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

  return `${monthNames[month]} ${day}, ${year}`;
};

const createdAt = "2024-08-29T03:55:37.022+00:00";
console.log(renderOrderDate(createdAt)); // "August 29, 2024"


  if (loading) {
    return <p>Loading...</p>; // Replace with a loading spinner if necessary
  }

  if (orderDetails.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search orders..."
          className="border rounded-md px-4 py-2 w-1/2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Export as .xlsx
        </button>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b w-min text-left">Order ID</th>
            <th className="px-6 py-3 border-b text-left">Customer</th>
            <th className="px-6 py-3 border-b text-left">Order item</th>
            <th className="px-6 py-3 border-b text-left">Ordered Date at</th>
            <th className="px-6 py-3 border-b text-left">Total Price</th>
            <th className="px-6 py-3 border-b text-left">Delivery Status</th>
            <th className="px-6 py-3 border-b text-left">Payment Method</th>
            <th className="px-6 py-3 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((order) => (
            <tr key={order.$id} className="hover:bg-gray-100">
              <td className="px-6 py-4 w-min border-b">{order.orderId}</td>
              <td className="px-6 py-4 border-b">{order.ConsumerName}</td>
              <td className="px-6 py-4 border-b">{order.orderDetails.items.map((item)=>(item.name)).join(' ; ')}</td>
              <td className="px-6 py-4 border-b">{renderOrderDate(order.$createdAt)}</td>
              <td className="px-6 py-4 border-b">{order.orderDetails.totalAmount}</td>
              <td className="px-6 py-4 border-b">
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 border-b">{order.PaymentId}
                {/* <br /> */}
              <div className="px-2 py-1 rounded-full text-sm font-semibold" >
              {order.PaymentId.startsWith('pay') ? 'razorpay' : 'COD'}
              </div>
              </td>
              <td className="px-6 py-4 border-b">
                <div className="relative">
                  <select
                    onChange={(e) => handleStatusChange(order.$id, e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={order.status}
                  >
                    <option value="Processing">Processing</option>
                    <option value="Out of Delivery">Out of Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageOrder;
