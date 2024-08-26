import { useState, useEffect } from "react";
import AuthServices from "../../Services/auth"; // Import AuthServices correctly
import { getOrderDetails as fetchOrderDetailsFromDB, updateStatus as updateOrderStatusInDB } from "../../Services/database";

// Custom Hook for Fetching Order Details
export const useOrderDetails = (orderId) => {
  const [orderDetails, setOrderDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        // Fetch the current user
        const currentUser = await AuthServices.getCurrentUser();
        if (currentUser && currentUser.$id) {
          setUser(currentUser);
          
          // Fetch the order details if orderId is available
          if (orderId) {
            const fetchedOrderDetails = await fetchOrderDetailsFromDB(orderId);
            setOrderDetails(fetchedOrderDetails);
          } else {
            setError("Order ID is missing.");
          }
        } else {
          console.error("User is not authenticated or user ID is missing.");
          setError("User is not authenticated or user ID is missing.");
        }
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return { orderDetails,user, loading, error };
};

// Custom Hook for Updating Order Status
export const useUpdateOrderStatus = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateOrderStatus = async (userId, orderId, newStatus) => {
    try {
      setLoading(true);
      setSuccess(false);
      setError(null);

      if (!userId || !orderId || !newStatus) {
        throw new Error("UserId, OrderId, or new status is missing");
      }

      await updateOrderStatusInDB(userId, orderId, newStatus);
      setSuccess(true);
    } catch (error) {
      console.error("Error updating order status:", error);
      setError(error.message || "Failed to update order status.");
    } finally {
      setLoading(false);
    }
  };

  return { updateOrderStatus, loading, error, success };
};
