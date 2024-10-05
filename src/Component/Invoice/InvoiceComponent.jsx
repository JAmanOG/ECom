// import React, { useEffect, useState } from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import Invoice from './Invoice';
// import { getOrderDetails } from './usefetchdata';


// const InvoicePage = ({ orderId }) => {
//    const [orderDetails, setOrderDetails] = useState([]);

//   useEffect(() => {
//   const fetchOrderDetailsFromDB = async (orderId) => {
//     try{
//       const orders = await getOrderDetails(orderId);  
//                     setOrderDetails(prders);
//                   }
//                 catch(error){
//                   console.log("Error", error);
//                   throw error;
//                 }
//               };
//               fetchOrderDetailsFromDB(orderId);
//             }, [orderId]);

//             console.log(orderDetails);
//   // const data = {
//   //   soldBy: "Repro Knowledgecast Ltd",
//   //   billingAddress: "Flat No: 302, Plot No: 20...",
//   //   shippingAddress: "Flat No: 302, Plot No: 20...",
//   //   items: [
//   //     {
//   //       description: "Cracking the Coding Interview",
//   //       price: "3999.00",
//   //       qty: 1,
//   //       amount: "3999.00",
//   //     },
//   //     {
//   //       description: "Shipping Charges",
//   //       price: "13.33",
//   //       qty: 1,
//   //       amount: "13.33",
//   //     }
//   //   ],
//   //   total: "3999.00",
//   // };

//   return (
//     <div>
//       <PDFDownloadLink
//         document={<Invoice data={data} />}
//         fileName={`invoice_${orderId}.pdf`}
//         className="text-blue-600 hover:underline"
//       >
//         {({ loading }) => (loading ? 'Loading invoice...' : 'Download Invoice')}
//       </PDFDownloadLink>
//     </div>
//   );
// };

// export default InvoicePage;
import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from './Invoice';
import { getOrderDetails } from './usefetchdata';

const InvoicePage = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetailsFromDB = async (orderId) => {
      try {
        const orders = await getOrderDetails(orderId);
        const order = orders.length > 0 ? orders[0] : null;
        if (order && order.OrderData.length > 0) {
          // Parse the OrderData JSON string
          const parsedOrderData = JSON.parse(order.OrderData[0]);
          setOrderDetails({ ...order, parsedOrderData });
        }
        console.log("orderDetails",orderDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order details:", error);
        setLoading(false);
      }
    };

    fetchOrderDetailsFromDB(orderId);
  }, [orderId]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!orderDetails) {
    return <p>No order details found for this order.</p>;
  }
  console.log("orderDetails Invoice",orderDetails);

  // Construct the data object based on the orderDetails
  const data = {
    soldBy: "FootDise",
    customerName: `${orderDetails.firstname} ${orderDetails.lastname}`,
    email: orderDetails.email,
    phone: orderDetails.phone,
    billingAddress: orderDetails.address,
    shippingAddress: `${orderDetails.address}, ${orderDetails.city}, ${orderDetails.state}, ${orderDetails.country}, ${orderDetails.zip}`,
    items: orderDetails.parsedOrderData[0].items.map(item => ({
      description: item.productName,
      price: item.price,
      qty: item.quantity,
      amount: item.price * item.quantity,
    })),
    shipping: orderDetails.parsedOrderData[0].shipping || 0,
    tax: orderDetails.parsedOrderData[0].tax || 0,
    savings: orderDetails.parsedOrderData[0].savings || 0,
    subtotal: orderDetails.parsedOrderData[0].subtotal || 0,
    total: orderDetails.parsedOrderData[0].totalPrice || "0.00",
    paymentMethod: orderDetails.PaymentMethod || "Not Provided",
    instructions: orderDetails.Instructions || "No special instructions",
    orderId: orderDetails.parsedOrderData[0].orderId,
    createdAt: new Date(orderDetails.parsedOrderData[0].createdAt).toLocaleDateString(),
  };

  return (
    <div>
      <PDFDownloadLink
        document={<Invoice data={data} />}
        fileName={`invoice_${orderId}.pdf`}
        className="text-blue-600 hover:underline"
      >
        {({ loading }) => (loading ? 'Loading invoice...' : 'Download Invoice')}
      </PDFDownloadLink>
    </div>
  );
};

export default InvoicePage;
