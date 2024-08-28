import { useMemo } from 'react';

const useSingleCalculateTotals = (singleProductDetails) => {
  const totals = useMemo(() => {
    if (!singleProductDetails) {
      return { subtotal: 0, savings: 0, shipping: 0, tax: 0, total: 0 };
    }

    const originalPrice = singleProductDetails.price || 0;
    const discountedPrice = singleProductDetails.discountedPrice || 0;
    const quantity = 1; // Adjust if needed

    const subtotal = discountedPrice * quantity;
    const savings = (originalPrice - discountedPrice) * quantity;
    const shipping = 20;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    return { subtotal, savings, shipping, tax, total };
  }, [singleProductDetails]);

  return totals;
};

export default useSingleCalculateTotals;
