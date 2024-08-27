import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductDetailsSkeleton = () => {
  return (
    <div className="product-details-container mt-5" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
      {/* Image Section */}
      <div style={{ width: '45%' }}>
        <Skeleton height={400} style={{ borderRadius: '8px' }} />
      </div>

      {/* Product Info Section */}
      <div style={{ width: '50%' }}>
        {/* Title */}
        <Skeleton height={30} width={'70%'} style={{ marginBottom: '10px' }} />
        
        {/* Rating */}
        <Skeleton height={20} width={'30%'} style={{ marginBottom: '20px' }} />

        {/* Color & Size Options */}
        <Skeleton height={20} width={'20%'} style={{ marginBottom: '10px' }} />
        <Skeleton height={20} width={'20%'} style={{ marginBottom: '20px' }} />

        {/* Price */}
        <Skeleton height={40} width={'30%'} style={{ marginBottom: '20px' }} />
        
        {/* Add to Cart Button */}
        <Skeleton height={50} width={'30%'} style={{ marginBottom: '20px', borderRadius: '8px' }} />

        {/* Share & Wishlist */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Skeleton height={20} width={'15%'} style={{ marginRight: '10px' }} />
          <Skeleton circle height={40} width={40} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
