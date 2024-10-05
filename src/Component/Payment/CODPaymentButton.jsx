import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCheckout from "../Checkout/useCheckout";
import useSubmit from "./useSubmit";

function CODPaymentButton({ amount, receipt, post, formdata,orderId, user,productId }) {
    const { handleRemoveAll } = useCheckout();
    const navigate = useNavigate();
    const currency = "INR";
    const { handleSubmit } = useSubmit(post, user,orderId ,formdata);

    const generaterandom = () => {
        return Math.floor(1000 + Math.random() * 9000);
    }

    async function paymentHandler(e) {
        e.preventDefault();
        const data = formdata;

        await handleSubmit();
        if (!productId) {
            handleRemoveAll();
        }

        // Parse OrderData from formdata
        const orderDataString = data.OrderData?.value?.[0];
        const orderData = JSON.parse(orderDataString);
        console.log('its me ...',orderData[0]);

        // Redirect to order confirmation page with state
        navigate('/order/order-confirmation', {
            state: {
                user: user,
                appOrderId: receipt,
                orderId: orderId,
                PaymentId: "cod_"+orderId+"_"+generaterandom(),
                ConsumerName: `${data.firstname?.value} ${data.lastname?.value}`,
                orderDetails: {
                    items: orderData[0].items.map(item => ({
                        id: item.productId,
                        name: item.productName,
                        quantity: item.quantity,
                        price: item.price
                    })),
                totalAmount: orderData[0].totalPrice,
                createdAt: orderData[0].createdAt
                }
            }
        });
    }

  return (
    <button
    onClick={paymentHandler}
    // className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"

>
    Pay Now
</button>  )
}

export default CODPaymentButton