import React from 'react';
import ViewOrder from './ViewOrder'; // Adjust the path as needed
import { useParams } from 'react-router-dom';

const OrderPage = () => {
  const { orderId } = useParams();

  return (
    <div>
      <ViewOrder orderId={orderId} />
    </div>
  );
};

export default OrderPage;
