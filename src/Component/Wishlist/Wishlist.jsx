import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlist, addWishlist, removeWishlist } from '../../Rtk/Slices/WishlistSlice';
import AuthServices from '../../Services/auth';

const WishlistComponent = () => {
    const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await AuthServices.getCurrentUser();
        if (user && user.$id) {
          const userId = user.$id;
          console.log('Fetching wishlist for user ID:', userId);
          const wishlistData = await dispatch(fetchWishlist(userId));
          console.log('Fetched wishlist data:', wishlistData.payload);
          setWishlist(wishlistData.payload);
        } else {
          console.error('User is not authenticated or user ID is missing.');
        }
      } catch (err) {
        console.error('Error fetching wishlist:', err);
      }
    };

    fetchData();
    setLoading(false);
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {wishlist.length > 0 ? (
        wishlist.map(item => (
          <div key={item.$id}>
            <p>Name: {item.userId}</p>
            <p>Product ID: {item.productId}</p>
          </div>
        ))
      ) : (
        <p>No items in your wishlist.</p>
      )}
    </div>
  );
};


export default WishlistComponent;
