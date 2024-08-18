import { useMemo} from 'react';

const useCalculateTotals = (checkout, productDetails) => {
  const totals = useMemo(() => {
    let subtotal = 0;
    let savings = 0;

    checkout.forEach((item) => {
      const product = productDetails[item.productId];
      if (product) {
        const originalPrice = product.price || 0;
        const discountedPrice = product.discountedPrice || 0;
        subtotal += discountedPrice * (item.quantity || 1);
        savings += (originalPrice - discountedPrice) * (item.quantity || 1);
      }
    });

    const shipping = 20;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    return { subtotal, savings, shipping, tax, total };
  }, [checkout, productDetails]);

  return totals;
};

export default useCalculateTotals;
