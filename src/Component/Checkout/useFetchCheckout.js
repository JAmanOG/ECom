// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { fetchCart } from "../../Rtk/Slices/CartSlice";
// import AuthServices from "../../Services/auth";
// import { appwriteService } from "../../Services/database";
// import { useSelector } from "react-redux";

// const useFetchCheckout = () => {
//   const [checkout, setCheckout] = useState([]);
//   const [productDetails, setProductDetails] = useState({});
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
  
  

//   const getProduct = async (productId) => {
//     try {
//       const product = await appwriteService.getPost(productId);
//       const image = await appwriteService.getFilePreview(product.featuredImage);
//       return { ...product, image };
//     } catch (error) {
//       console.error("Error fetching product:", error);
//     }
//   };


//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const user = await AuthServices.getCurrentUser();
//         if (user && user.$id) {
//           const userId = user.$id;
//           console.log("Fetching checkout for user ID:", userId);
//           const CartData = await dispatch(fetchCart(userId));
//           setCheckout(CartData.payload);
//           console.log("CartData:", CartData.payload);
//           // Fetch product details for each checkout item
//           const details = {};
//           for (const item of CartData.payload) {
//             const product = await getProduct(item.productId);
//             details[item.productId] = product;
//           }
//           setProductDetails(details);
//           console.log("Product details:", details);
//         } else {
//           console.error("User is not authenticated or user ID is missing.");
//         }
//       } catch (err) {
//         console.error("Error fetching checkout:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [dispatch]); // Only dispatch needs to be in the dependency array

//   return { checkout, productDetails, loading };
// };

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../Rtk/Slices/CartSlice";
import AuthServices from "../../Services/auth";
import { appwriteService } from "../../Services/database";

const useFetchCheckout = () => {
  const [checkout, setCheckout] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items); // Get cart data from Redux
  const prevCartRef = useRef(null); // Ref to keep track of the previous cart value

  const getProduct = async (productId) => {
    try {
      const product = await appwriteService.getPost(productId);
      const image = await appwriteService.getFilePreview(product.featuredImage);
      return { ...product, image };
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const user = await AuthServices.getCurrentUser();
      if (user && user.$id) {
        const userId = user.$id;
        console.log("Fetching checkout for user ID:", userId);
        const CartData = await dispatch(fetchCart(userId));
        setCheckout(CartData.payload);
        console.log("CartData:", CartData.payload);

        // Fetch product details for each checkout item
        const details = {};
        for (const item of CartData.payload) {
          const product = await getProduct(item.productId);
          if (product) {
            details[item.productId] = product;
          }
        }
        setProductDetails(details);
        console.log("Product details:", details);
      } else {
        console.error("User is not authenticated or user ID is missing.");
      }
    } catch (err) {
      console.error("Error fetching checkout:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount and cart updates
  }, [dispatch]); // Only `dispatch` is in the dependency array

  useEffect(() => {
    if (JSON.stringify(cart) !== JSON.stringify(prevCartRef.current)) {
      prevCartRef.current = cart; // Update the ref with the current cart
      fetchData();
    }
  }, [cart]);

  return { checkout, productDetails, loading };
};

export default useFetchCheckout;
