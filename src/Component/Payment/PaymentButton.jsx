import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSubmit from "./useSubmit";
import useCheckout from "../Checkout/useCheckout";

function PaymentButton({ amount, receipt, post, formdata,orderId, user,productId }) {
    const { handleRemoveAll } = useCheckout();
    const navigate = useNavigate();
    const currency = "INR";
    
    const { handleSubmit } = useSubmit(post, user,orderId ,formdata);


    const paymentHandler = async (e) => {
        e.preventDefault();
        const data = formdata;

        // Create order
        const response = await fetch("https://razorpayapp.azurewebsites.net//order", {
            method: "POST",
            body: JSON.stringify({ amount, currency, receipt }),
            headers: { "Content-Type": "application/json" },
        });

        const order = await response.json();

        // Razorpay payment options
        var options = {
            key: "rzp_test_yE28CKNr1iMmgF",
            amount,
            currency,
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id,
            handler: async function (response) {
                // Validate payment
                const validateRes = await fetch("https://razorpayapp.azurewebsites.net//order/validate", {
                    method: "POST",
                    body: JSON.stringify(response),
                    headers: { "Content-Type": "application/json" },
                });
                const jsonRes = await validateRes.json();


                if (jsonRes.msg === "Payment successfull!") {
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
                            orderId: jsonRes.orderId,
                            PaymentId: response.razorpay_payment_id,
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
            },
            prefill: {
                name: `${data.firstname?.value} ${data.lastname?.value}`,
                phone: data.phone?.value,
                email: data.email?.value,
                contact: data.phone?.value,
            },
            notes: { address: data.streetAddress?.value },
            theme: { color: "#3399cc" },
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
            alert(response.error.description);
        });

        rzp1.open();
    };

    return (
        <button
            onClick={paymentHandler}
            className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
        >
            Pay Now
        </button>
    );
}

export default PaymentButton;
