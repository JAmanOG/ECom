import React,{useState,useEffect} from 'react'
import { Link, useParams, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import the CSS for the skeleton
import { getSpecialShoes,getSpecialSportShoes } from "../../Services/database";
import { appwriteService } from "../../Services/database";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWishlist,
  addWishlist,
  removeWishlist,
} from "../../Rtk/Slices/WishlistSlice";
import AuthServices from "../../Services/auth";
import useCheckout from "../Checkout/useCheckout";
import { Category } from '@mui/icons-material';

function SpecialCategories() {
    const {special} = useParams()
    console.log('useParams: ',special)
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const [alert, setAlert] = useState({ type: "", message: "" }); // New state for alert messages

  const dispatch = useDispatch();
  const {
    checkout,
    handleCheckout,
    handleRemove,
    handleIncrement,
    handleDecrement,
    isInCart,
  } = useCheckout();

  const wishlists = useSelector((state) => state.wishlist.items || []);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let shoesData;
        let category = null
        let subcategory = null
        let tagss = null
  
        switch (special) {
          case 'MenCollection':
            shoesData = await getSpecialShoes('Men', 50);
            break;
          case 'WomenCollection':
            shoesData = await getSpecialShoes('Women', 50);
            break;
          case 'KidsCollection':
            shoesData = await getSpecialShoes('Kids', 50);
            break;
          case 'FormalsCollection':
            shoesData = await getSpecialShoes('Men', 30);
            break;
          case 'SportsCollection':
            shoesData = await getSpecialSportShoes(category, 'athletic_footwear', tagss, 30);
            break;
          case 'SportsCollectionMen':
            shoesData = await getSpecialSportShoes('Men', 'athletic_footwear', tagss, 30);
            break;
          case 'SportsCollectionWomen':
            shoesData = await getSpecialSportShoes('Women', 'athletic_footwear', tagss, 30);
            break;
          case 'SportsCollectionKids':
            shoesData = await getSpecialSportShoes('Kids', 'sports_shoes', tagss, 0);
            break;
          case 'SchoolCollectionKids':
            shoesData = await getSpecialSportShoes('Kids', 'school_shoes', tagss, 0);
            break;
          case 'FormalCollection':
            shoesData = await getSpecialSportShoes('Men', 'formal_shoes', tagss, 30);
            break;
          case 'NewArrivalWomen':
            shoesData = await getSpecialSportShoes('Women', subcategory, 'new_arrival', 1);
            break;
          case 'HeelsCollection':
            shoesData = await getSpecialSportShoes('Women', 'heels', tagss, 0);
            break;
          case 'NewArrivalKids':
            shoesData = await getSpecialSportShoes('Kids',subcategory,'new_arrival',0);
            break;
          case 'SchoolCollection':
            shoesData = await getSpecialShoes('Kids', 50);
            break;
          default:
            // Consider using a state for error messages
            setAlert({ type: 'warning', message: 'No Data Found' });
            return; // Exit early if no data found
        }
  
        setShoes(shoesData);
  
        const currentUser = await AuthServices.getCurrentUser();
        if (currentUser && currentUser.$id) {
          setUser(currentUser);
          await dispatch(fetchWishlist(currentUser.$id));
        } else {
          console.error("User is not authenticated or user ID is missing.");
        }
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [special, dispatch]);
  

  useEffect(() => {
    setWishlist(wishlists);
  }, [wishlists]);

  const handleWishlist = async (productId) => {
    try {
      const user = await AuthServices.getCurrentUser();
      if (!user || !user.$id) {
        console.error("User is not authenticated or user ID is missing.");
        return;
      }

      const userId = user.$id;

      if (!Array.isArray(wishlist)) {
        console.error("Wishlist is not an array");
        return;
      }

      const productInWishlist = wishlist.find((item) =>
        item.productId.includes(productId)
      );

      if (productInWishlist) {
        await dispatch(removeWishlist({ userId, productId }));
        setAlert({
          type: "warning",
          message: "Removed from wishlist successfully!",
        });
      } else {
        await dispatch(addWishlist({ userId, productId }));
        setAlert({
          type: "success",
          message: "Added to wishlist successfully!",
        });
      }
    } catch (err) {
      console.error("Error handling wishlist:", err);
      setAlert({
        type: "danger",
        message: "An error occurred while updating the wishlist.",
      });
    }
  };

  const getWishlistIconColor = (productId) => {
    if (!Array.isArray(wishlist)) {
      return "#242424";
    }

    return wishlist.find((item) => item.productId.includes(productId))
      ? "#E00A00"
      : "#FFFFFF";
  };

  if (loading) {
    return (
      <div className="container px-6 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <Skeleton height={224} />
                <div className="p-6">
                  <Skeleton height={30} width="60%" />
                  <Skeleton height={20} width="40%" />
                  <Skeleton height={20} width="80%" />
                  <Skeleton height={40} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

//   if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
        <section className="text-gray-700 body-font bg-gray-100">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {shoes.map((shoe) => (
              <div key={shoe.$id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <Link
                    to={`/shops/${shoe.Category}/${shoe.Footwear_Type}/${shoe.Variety}/${shoe.$id}`}
                    className="block relative h-56 overflow-hidden"
                  >
                    <img
                      alt={shoe.name}
                      className="object-cover object-center w-full h-full"
                      src={
                        shoe.featuredImage
                          ? appwriteService.getFilePreview(shoe.featuredImage)
                          : "fallback-image-url"
                      }
                    />
                  </Link>
                  <div className="p-6">
                    <h3 className="text-indigo-500 text-xs font-semibold tracking-widest mb-1 uppercase">
                      {shoe.Variety}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-bold mb-2">
                      {shoe.name}
                    </h2>
                    {shoe.discountPercent > 0 ? (
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-500 text-sm">
                            <strike>${shoe.price}</strike>
                          </span>
                          <p className="text-red-500 text-xl font-bold">
                            ${shoe.discountedPrice}
                          </p>
                          <span className="text-green-500 text-xs font-semibold">
                            {shoe.discountPercent}% Off
                          </span>
                        </div>
                        <button
                          className="text-red-500 hover:text-red-700 transition duration-300"
                          onClick={() => handleWishlist(shoe.$id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 20 16"
                          >
                            <path
                              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                              fill={getWishlistIconColor(shoe.$id)}
                              stroke="#000"
                              fillRule="evenodd"
                              opacity=".9"
                            />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <p className="text-gray-900 text-xl font-bold">
                          ${shoe.price}
                        </p>
                        <button
                          className="text-red-500 hover:text-red-700 cursor-pointer transition duration-300"
                          onClick={() => handleWishlist(shoe.$id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 20 16"
                          >
                            <path
                              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                              fill={getWishlistIconColor(shoe.$id, 3)}
                              stroke="#000"
                              fillRule="evenodd"
                              opacity=".9"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center w-full items-center space-x-2">
                    {!isInCart[shoe.$id] ? (
                      <button
                        onClick={() => handleCheckout(shoe.$id, 1)}
                        className="w-full py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                        type="button"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleIncrement(shoe.$id, 1)}
                          className="py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                          type="button"
                        >
                          +
                        </button>
                        <div className="flex items-center justify-center w-12 h-10 bg-gray-200 text-gray-900 font-semibold rounded-lg">
                          {checkout.find((item) => item.productId === shoe.$id)?.quantity || 0}
                        </div>
                        <button
                          onClick={() => handleDecrement(shoe.$id, 1)}
                          className="py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                          type="button"
                        >
                          -
                        </button>
                        <button
                          onClick={() => handleRemove(shoe.$id)}
                          className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                          type="button"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SpecialCategories