import { useEffect, useState } from "react";
import AuthServices from "../../Services/auth";
import { getProduct as getSingleProduct } from "../../Services/database";

const useSingleFetchCheckout = (productIds) => {
  const [singleProductDetails, setSingleProductDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const singlefetchData = async () => {
    setLoading(true);
    try {
      const user = await AuthServices.getCurrentUser();
      if (user && user.$id) {
        const productData = await getSingleProduct(productIds);
                console.log("Product details:", productData);
        setSingleProductDetails(productData);
      } else {
        console.error("User is not authenticated or user ID is missing.");
      }
    } catch (error) {
      console.error("Error fetching checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    singlefetchData();
  }, [productIds]);

  return { singlefetchData, singleProductDetails, loading };
};

export default useSingleFetchCheckout;
