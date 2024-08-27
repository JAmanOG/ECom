import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const OrderDetailsSkeleton = () => {
  return (
    <div className="order-details-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <Skeleton height={40} width={300} style={{ borderRadius: '8px' }} />
        <Skeleton height={20} width={250} style={{ marginTop: '10px' }} />
      </div>

      {/* Order Summary */}
      <div style={{ marginBottom: '30px' }}>
        <Skeleton height={25} width={200} />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <Skeleton width={100} height={100} style={{ borderRadius: '8px', marginRight: '20px' }} />
          <div>
            <Skeleton width={150} height={20} />
            <Skeleton width={100} height={20} style={{ marginTop: '10px' }} />
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div style={{ marginBottom: '30px' }}>
        <Skeleton height={25} width={200} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ width: '48%' }}>
            <Skeleton height={20} width={'100%'} />
            <Skeleton height={15} width={'100%'} style={{ marginTop: '10px' }} />
            <Skeleton height={15} width={'100%'} style={{ marginTop: '10px' }} />
            <Skeleton height={15} width={'100%'} style={{ marginTop: '10px' }} />
          </div>
          <div style={{ width: '48%' }}>
            <Skeleton height={20} width={'100%'} />
            <Skeleton height={15} width={'100%'} style={{ marginTop: '10px' }} />
            <Skeleton height={15} width={'100%'} style={{ marginTop: '10px' }} />
            <Skeleton height={15} width={'100%'} style={{ marginTop: '10px' }} />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div style={{ marginBottom: '30px' }}>
        <Skeleton height={25} width={200} />
        <Skeleton height={20} width={'50%'} style={{ marginTop: '10px' }} />
        <Skeleton height={20} width={'50%'} style={{ marginTop: '10px' }} />
      </div>

      {/* Order Summary Section */}
      <div style={{ marginBottom: '30px' }}>
        <Skeleton height={25} width={200} />
        <div style={{ marginTop: '20px' }}>
          <Skeleton height={20} width={'100%'} />
          <Skeleton height={20} width={'100%'} style={{ marginTop: '10px' }} />
          <Skeleton height={20} width={'100%'} style={{ marginTop: '10px' }} />
          <Skeleton height={20} width={'100%'} style={{ marginTop: '10px' }} />
        </div>
      </div>

      {/* Footer Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Skeleton height={40} width={120} style={{ borderRadius: '8px' }} />
        <Skeleton height={40} width={150} style={{ borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default OrderDetailsSkeleton;
