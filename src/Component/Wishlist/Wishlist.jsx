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
              <div className="container p-5 mx-auto my-3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={
                      productDetails[item.productId]?.image ||
                      "fallback-image-url"
                    }
                    alt={productDetails[item.productId]?.name || "Product"}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {productDetails[item.productId]?.Category || "Loading..."}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {productDetails[item.productId]?.name || "Loading..."}
                    </h1>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Add to Cart
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </a>
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
