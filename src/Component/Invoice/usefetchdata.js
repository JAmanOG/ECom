import { databases } from '../../Services/database';
import conf from '../../Services/conf';
import { Query } from 'appwrite';


export const getOrderDetails = async (orderId) => {
    try {
      console.log("Fetching Order Details for user ID:", orderId);
      const response = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteProductformsCollectionId,
        [Query.equal("orderId",orderId)]
      )
      return response.documents;
    } catch (error) {
      console.error("Failed to fetch Order Details:", error);
      throw error;
    }
  };

  export const getOrderDetail = async (orderId) => {
    // Replace with your actual API/database call to fetch order details
    const orders = [
      {
        appOrderId: 'rcpt_1724701266534',
        OrderData: ['{"items":[{"productName":"Product 1","quantity":2,"price":100},{"productName":"Product 2","quantity":1,"price":200}],"shipping":10,"tax":15,"savings":20,"subtotal":300,"totalPrice":305,"orderId":"rcpt_1724701266534","createdAt":"2023-08-25T12:34:56Z"}'],
        address: "B-53, Jaiswal",
        city: "Navi Mumbai",
        state: "Maharashtra",
        country: "India",
        zip: "123456",
        PaymentMethod: "Credit Card",
        Instructions: "Leave at the door",
      },
      // Add more orders as needed
    ];
  
    return orders.filter(order => order.appOrderId === orderId);
  };
  