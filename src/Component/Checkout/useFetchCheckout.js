import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../Rtk/Slices/CartSlice";
import AuthServices from "../../Services/auth";
import { appwriteService } from "../../Services/database";

const useFetchCheckout = () => {
  const [checkout, setCheckout] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getProduct = async (productId) => {
    try {
      const product = await appwriteService.getPost(productId);
      const image = await appwriteService.getFilePreview(product.featuredImage);
      return { ...product, image };
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await AuthServices.getCurrentUser();
        if (user && user.$id) {
          const userId = user.$id;
          console.log("Fetching checkout for user ID:", userId);
          const CartData = await dispatch(fetchCart(userId));
          setCheckout(CartData.payload);

          // Fetch product details for each checkout item
          const details = {};
          for (const item of CartData.payload) {
            const product = await getProduct(item.productId);
            details[item.productId] = product;
          }
          setProductDetails(details);
        } else {
          console.error("User is not authenticated or user ID is missing.");
        }
      } catch (err) {
        console.error("Error fetching checkout:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return { checkout, productDetails, loading };
};

export default useFetchCheckout;
