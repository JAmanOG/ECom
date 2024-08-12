// import React, { useEffect, useState } from "react";
// import { Link, useParams, useLocation } from "react-router-dom";
// import { getShoes } from "../../Services/database";
// import { appwriteService,getWishlist } from "../../Services/database";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchWishlist, addWishlist, removeWishlist } from "../../Rtk/Slices/WishlistSlice";
// import AuthServices from "../../Services/auth";


// const Shoecategory = () => {
//   const { category, subcategory, subsubcategory } = useParams();
//   const [shoes, setShoes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const wishlist = useSelector((state) => state.wishlist.items || []);
  
//   useEffect(() => {

//     const fetchData = async () => {
//       try {
//         // Fetch shoes
//         const shoesData = await getShoes(category, subcategory, subsubcategory);
//         setShoes(shoesData);

//         // Fetch wishlist
//         const user = await AuthServices.getCurrentUser();
        
//         if (user && user.$id) {
//           await dispatch(fetchWishlist(user.$id));
//         } else {
//           console.error("User is not authenticated or user ID is missing.");
//         }
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [category, subcategory, subsubcategory, dispatch]);

//   const handleWishlist = async (productId) => {
//     try {
//       const user = await AuthServices.getCurrentUser();
//       if (!user || !user.$id) {
//         console.error("User is not authenticated or user ID is missing.");
//         return;
//       }
  
//       const userId = user.$id;
//       console.log('wishlist:', wishlist);
//       if(productId){
//         console.log("Entry ProductId: ",productId);
        
//         const productInWishlist = wishlist.find(item => item.productId === productId);
//         console.log("Product in wishlist:", productInWishlist);
//         if (productInWishlist) {
//           console.log("data sent : ",productInWishlist.$id);
          
//           dispatch(removeWishlist({ userId, productId: productId }));
//         } else {
//           dispatch(addWishlist({ userId, productId }));
//         }
//       }else{
//         console.log("issue");
        
//       }
  
  
//     } catch (err) {
//       console.error("Error handling wishlist:", err);
//     }
//   };
  
  

//   if (loading) return <div>Loading...</div>;
//   // if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>{subcategory.replace(/-/g, " ")}</h1>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap -m-4">
//             {shoes.map((shoe) => (
//               <div key={shoe.$id} className="lg:w-1/4 z-0 md:w-1/2 p-4 w-full">
//                 <Link
//                   to={`${location.pathname}/${shoe.$id}`}
//                   className="block relative h-48 rounded overflow-hidden"
//                 >
//                   <img
//                     alt={shoe.name}
//                     className="object-cover object-center w-full h-full block"
//                     src={
//                       shoe.featuredImage
//                         ? appwriteService.getFilePreview(shoe.featuredImage)
//                         : "fallback-image-url"
//                     }
//                   />
//                 </Link>
//                 <div className="mt-4">
//                   <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//                     {shoe.Variety}
//                   </h3>
//                   <h2 className="text-gray-900 title-font text-lg font-medium">
//                     {shoe.name}
//                   </h2>
//                   {shoe.discountPercent > 0 ? (
//                     <>
//                       <span className="flex">
//                         <strike>
//                           <p className="mt-1 font-bold">${shoe.price}</p>
//                         </strike>
//                         <span>
//                           &nbsp;{shoe.discountPercent}% <span>Off</span>
//                         </span>
//                       </span>
//                       <p className="mt-1 font-bold underline">
//                         ${shoe.discountedPrice}
//                       </p>
//                     </>
//                   ) : (
//                     <div className="flex justify-between">
//                       <p className="mt-1 font-bold">${shoe.price}</p>
//                       <span className="z-40 material-symbols-outlined relative bottom-5 right-3">
//                         <button onClick={() => handleWishlist(shoe.$id)}>
//                           favorite
//                         </button>
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Shoecategory;
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getShoes } from "../../Services/database";
import { appwriteService } from "../../Services/database";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist, addWishlist, removeWishlist } from "../../Rtk/Slices/WishlistSlice";
import AuthServices from "../../Services/auth";

const Shoecategory = () => {
  const { category, subcategory, subsubcategory } = useParams();
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // Store user data in state
  const location = useLocation();
  const [fillcolor,setFillcolor] = useState('#242424')

  const dispatch = useDispatch();
    useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch shoes
        const shoesData = await getShoes(category, subcategory, subsubcategory);
        setShoes(shoesData);

        // Fetch user and wishlist
        const currentUser = await AuthServices.getCurrentUser();
        if (currentUser && currentUser.$id) {
          setUser(currentUser); // Store user data in state
          await dispatch(fetchWishlist(currentUser.$id));
        } else {
          console.error("User is not authenticated or user ID is missing.");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, subcategory, subsubcategory, dispatch]);

  const wishlists = useSelector((state) => state.wishlist.items || []);
const [wishlist, setWishlist] = useState([]);

useEffect(() => {
  setWishlist(wishlists);
}, [wishlists]); // Update wishlist when wishlists change

const handleWishlist = async (productId) => {
  try {
    const user = await AuthServices.getCurrentUser();
    if (!user || !user.$id) {
      console.error("User is not authenticated or user ID is missing.");
      return;
    }

    const userId = user.$id;
    console.log('wishlist:', wishlist);
    console.log("Entry ProductId: ", productId);

    if (!Array.isArray(wishlist)) {
      console.error('Wishlist is not an array');
      return;
    }

    const productInWishlist = wishlist.find(item => item.productId.includes(productId)); 
    console.log("Product in wishlist:", productInWishlist);

    if (productInWishlist) {
      await dispatch(removeWishlist({ userId, productId }));
      // setFillcolor('#F5EEDE')
    } else {
      await dispatch(addWishlist({ userId, productId }));
      
    }
  } catch (err) {
    console.error("Error handling wishlist:", err);
  }
};

  
  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{subcategory.replace(/-/g, " ")}</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {shoes.map((shoe) => (
              <div key={shoe.$id} className="lg:w-1/4 z-0 md:w-1/2 p-4 w-full">
                <Link
                  to={`${location.pathname}/${shoe.$id}`}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt={shoe.name}
                    className="object-cover object-center w-full h-full block"
                    src={
                      shoe.featuredImage
                        ? appwriteService.getFilePreview(shoe.featuredImage)
                        : "fallback-image-url"
                    }
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {shoe.Variety}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {shoe.name}
                  </h2>
                  {shoe.discountPercent > 0 ? (
                    <>
                      <span className="flex">
                        <strike>
                          <p className="mt-1 font-bold">${shoe.price}</p>
                        </strike>
                        <span>
                          &nbsp;{shoe.discountPercent}% <span>Off</span>
                        </span>
                      </span>
                      <p className="mt-1 font-bold underline">
                        ${shoe.discountedPrice}
                      </p>
                    </>
                  ) : (
                    <div className="flex justify-between">
                      <p className="mt-1 font-bold">${shoe.price}</p>
                      <span className="z-40 relative bottom-5 right-3">
                        <button onClick={() => handleWishlist(shoe.$id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill={fillcolor} class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                        </button>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shoecategory;
