import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, fetchCart, removeCart, incrementQuantity, decrementQuantity } from "../../Rtk/Slices/CartSlice";
import AuthServices from "../../Services/auth";

const useCheckout = () => {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.cart.items);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isInCart, setIsInCart] = useState({}); // State to track items in the cart

  useEffect(() => {
    const fetchUserAndCart = async () => {
      try {
        const currentUser = await AuthServices.getCurrentUser();
        if (currentUser && currentUser.$id) {
          setUser(currentUser);
          await dispatch(fetchCart(currentUser.$id));
        } else {
          console.error("User is not authenticated or user ID is missing.");
          setError("User is not authenticated or user ID is missing.");
        }
      } catch (error) {
        console.error("Failed to fetch user or cart:", error);
        setError("Failed to fetch user or cart.");
      }
    };

    fetchUserAndCart();
  }, [dispatch]);

  useEffect(() => {
    // Update cart status
    const updateCartStatus = () => {
      const status = {};
      checkout.forEach(item => {
        status[item.productId] = item.quantity > 0;
      });
      setIsInCart(status);
    };

    updateCartStatus();
  }, [checkout]);

  const handleCheckout = async (productId, quantity = 1) => {
    try {
      if (!user || !user.$id) {
        setError("User not logged in");
        return;
      }

      const userId = user.$id;

      if (!Array.isArray(checkout)) {
        setError("Invalid checkout data; it should be an array");
        return;
      }

      const productInCart = checkout.find((item) => item.productId === productId);

      if (!productInCart) {
        await dispatch(addCart({ userId, productId, quantity }));
      } else {
        dispatch(incrementQuantity({ userId, productId, quantity }));
      }
    } catch (error) {
      console.log("Error in checkout process:", error);
      setError("Checkout process failed");
    }
  };

  const handleIncrement = async (productId, quantity = 1) => {
    try {
      if (!user || !user.$id) {
        setError("User not logged in");
        return;
      }

      const userId = user.$id;
      await dispatch(incrementQuantity({ userId, productId, quantity }));
    } catch (error) {
      console.log("Error in increment process:", error);
      setError("Increment process failed");
    }
  };

  const handleDecrement = async (productId, quantity = 1) => {
    try {
      if (!user || !user.$id) {
        setError("User not logged in");
        return;
      }

      const userId = user.$id;
      await dispatch(decrementQuantity({ userId, productId, quantity }));
    } catch (error) {
      console.log("Error in decrement process:", error);
      setError("Decrement process failed");
    }
  };

  const handleRemove = async (productId) => {
    try {
      if (!user || !user.$id) {
        setError("User not logged in");
        return;
      }

      const userId = user.$id;

      if (!Array.isArray(checkout)) {
        setError("Invalid checkout data; it should be an array");
        return;
      }

      const productInCart = checkout.find((item) => item.productId === productId);

      if (productInCart) {
        await dispatch(removeCart({ userId, productId }));
      } else {
        setError("Product not found in cart");
      }
    } catch (error) {
      console.log("Error in checkout process:", error);
      setError("Checkout process failed");
    }
  };

  return { user, checkout, handleCheckout, handleRemove, handleIncrement, handleDecrement, isInCart, error };
};

export default useCheckout;
