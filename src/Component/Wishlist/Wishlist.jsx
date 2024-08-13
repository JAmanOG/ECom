import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWishlist } from "../../Rtk/Slices/WishlistSlice";
import AuthServices from "../../Services/auth";
import { appwriteService } from "../../Services/database";
import { Link, useNavigate } from "react-router-dom";

const WishlistComponent = () => {
  const [wishlist, setWishlist] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
          console.log("Fetching wishlist for user ID:", userId);
          const wishlistData = await dispatch(fetchWishlist(userId));
          setWishlist(wishlistData.payload);

          // Fetch product details for each wishlist item
          const details = {};
          for (const item of wishlistData.payload) {
            const product = await getProduct(item.productId);
            details[item.productId] = product;
          }
          setProductDetails(details);
        } else {
          console.error("User is not authenticated or user ID is missing.");
        }
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
    <div className="m-3">
      <Link className="flex font-bold" to={`/`}>
        <span className="material-symbols-outlined">arrow_back_ios</span>{" "}
        <span>Back to Home</span>
      </Link>
    </div>
      <div className="grid-flow-col grid">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.$id}>
              <div className="p-5 mx-auto my-4 max-w-sm lg:max-w-md">
  <div className="h-full border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      className="h-48 w-full object-cover"
      src={
        productDetails[item.productId]?.image ||
        "fallback-image-url"
      }
      alt={productDetails[item.productId]?.name || "Product"}
    />
    <div className="p-4">
      <h2 className="text-xs font-semibold text-gray-500 uppercase mb-1">
        {productDetails[item.productId]?.Category || "Loading..."}
      </h2>
      <h1 className="text-lg font-bold text-gray-900 mb-2">
        {productDetails[item.productId]?.name || "Loading..."}
      </h1>
      <div className="flex items-center justify-between">
        <button className="text-indigo-600 font-semibold hover:text-indigo-800 inline-flex items-center">
          Add to Cart
          <svg
            className="w-5 h-5 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

            </div>
          ))
        ) : (
          <p>No items in your wishlist.</p>
        )}
      </div>
    </>
  );
};

export default WishlistComponent;
