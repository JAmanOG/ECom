// import React from "react";
// import { useNavigate } from "react-router-dom";
// import useCheckout from "../Checkout/useCheckout";

// function PaymentButton({amount,receipt}) {
//   const { user,handleRemoveAll, error } = useCheckout();
//   const navigate = useNavigate();
//   amount;
//   const currency = "INR";
//   receipt
//   const paymenthandler = async (e) => {
//     const response = await fetch("http://localhost:5000/order", {
//       method: "POST",
//       body: JSON.stringify({ amount, currency, receipt: receipt }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log(response);

//     const order = await response.json();
//     console.log(order);
//     var options = {
//       key: "rzp_test_yE28CKNr1iMmgF",
//       amount,
//       currency,
//       name: "Acme Corp",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.id,
//       handler: async function (response) {
//         const body = {
//           ...response,
//         };

//         const validateRes = await fetch(
//           "http://localhost:5000/order/validate",
//           {
//             method: "POST",
//             body: JSON.stringify(body),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const jsonRes = await validateRes.json();
//         if (jsonRes.msg === "Payment successfull!") {
//           alert("Payment Successful");
//           handleRemoveAll();
//           navigate("/orders");

//         }else{
//           alert("Payment Failed");
//         }
//         console.log(jsonRes);
//       },
//       prefill: {
//         name: "Aman",
//         email: "jaman0120@example.com",
//         contact: "9000090000",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };
//     var rzp1 = new window.Razorpay(options);
//     rzp1.on("payment.failed", function (response) {
//       alert(response.error.code);
//       alert(response.error.description);
//       alert(response.error.source);
//       alert(response.error.step);
//       alert(response.error.reason);
//       alert(response.error.metadata.order_id);
//       alert(response.error.metadata.payment_id);
//     });
//     rzp1.open();
//     e.preventDefault();
//   };

//   return (
//     <button
//       onClick={paymenthandler}
//       className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
//     >
//       Pay Now
//     </button>
//   );
// }

// export default PaymentButton;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import useCheckout from "../Checkout/useCheckout";

// function PaymentButton({ amount, receipt }) {
//   const { handleRemoveAll } = useCheckout();
//   const navigate = useNavigate();
//   const currency = "INR";

//   const paymentHandler = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:5000/order", {
//       method: "POST",
//       body: JSON.stringify({ amount, currency, receipt }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const order = await response.json();

//     var options = {
//       key: "rzp_test_yE28CKNr1iMmgF",
//       amount,
//       currency,
//       name: "Acme Corp",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.id,
//       handler: async function (response) {
//         const validateRes = await fetch(
//           "http://localhost:5000/order/validate",
//           {
//             method: "POST",
//             body: JSON.stringify(response),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const jsonRes = await validateRes.json();
//         console.log(jsonRes);
//         if (jsonRes.msg === "Payment successfull!") {
//           alert("Payment Successful");
//           handleRemoveAll();
//           navigate("/orders");
//         } else {
//           console.log("Payment Failed",error);
//         }
//       },
//       prefill: {
//         name: "Aman",
//         email: "jaman0120@example.com",
//         contact: "9000090000",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     var rzp1 = new window.Razorpay(options);
//     rzp1.on("payment.failed", function (response) {
//       alert(response.error.description);
//     });

//     rzp1.open();
//   };

//   return (
//     <button
//       onClick={paymentHandler}
//       className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
//     >
//       Pay Now
//     </button>
//   );
// }

// export default PaymentButton;





// function PaymentButton({ amount, receipt, formData }) {
//   const { handleRemoveAll } = useCheckout();
//   const navigate = useNavigate();
//   const currency = "INR";

//   const paymentHandler = async (e) => {
//     e.preventDefault();
    
//     const response = await fetch("http://localhost:5000/order", {
//       method: "POST",
//       body: JSON.stringify({ amount, currency, receipt }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const order = await response.json();

//     var options = {
//       key: "rzp_test_yE28CKNr1iMmgF",
//       amount,
//       currency,
//       name: "Acme Corp",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.id,
//       handler: async function (response) {
//         const validateRes = await fetch(
//           "http://localhost:5000/order/validate",
//           {
//             method: "POST",
//             body: JSON.stringify(response),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const jsonRes = await validateRes.json();
//         console.log(jsonRes);
//         if (jsonRes.msg === "Payment successfull!") {
//           alert("Payment Successful");

//           // Submit form data to your backend
//           const submitFormRes = await fetch("http://localhost:5000/submit-form", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//           });

//           const formResData = await submitFormRes.json();
//           console.log("Form data submitted:", formResData);

//           handleRemoveAll();
//           navigate("/orders");
//         } else {
//           console.log("Payment Failed", error);
//         }
//       },
//       prefill: {
//         name: "Aman",
//         email: "jaman0120@example.com",
//         contact: "9000090000",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     var rzp1 = new window.Razorpay(options);
//     rzp1.on("payment.failed", function (response) {
//       alert(response.error.description);
//     });

//     rzp1.open();
//   };

//   return (
//     <button
//       onClick={paymentHandler}
//       className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
//     >
//       Pay Now
//     </button>
//   );
// }

// export default PaymentButton;
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Gather all the state values
//   const formData = getFormData(); 

//   // Now you can use formData to send data to your backend
//   try {
//     const response = await fetch('http://localhost:5000/order/validate', {
//       method: 'POST',
//       body: JSON.stringify({amount, currency, receipt,formData}),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const jsonRes = await response.json();
//     console.log(jsonRes);

//     if (jsonRes.msg === 'Payment successful!') {
//       alert('Payment Successful');
//       handleRemoveAll();
//       navigate('/orders');
//     } else {
//       console.log('Payment Failed');
//     }
//   } catch (error) {
//     console.error('Error during form submission:', error);
//   }
// };

// const paymentHandler = async (e) => {
//   e.preventDefault();

//   const response = await fetch("http://localhost:5000/order", {
//     method: "POST",
//     body: JSON.stringify({ amount, currency, receipt }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const order = await response.json();

//   var options = {
//     key: "rzp_test_yE28CKNr1iMmgF",
//     amount,
//     currency,
//     name: "Acme Corp",
//     description: "Test Transaction",
//     image: "https://example.com/your_logo",
//     order_id: order.id,
//     handler: async function (response) {
    //   const validateRes = await fetch(
    //     "http://localhost:5000/order/validate",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(response),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const jsonRes = await validateRes.json();
    //   console.log(jsonRes);
    //   if (jsonRes.msg === "Payment successful!") {
    //     alert("Payment Successful");
    //     handleSubmit(); // Call the function to handle form data submission
    //     handleRemoveAll();
    //     navigate("/orders");
    //   } else {
    //     console.log("Payment Failed");
    //   }
    // },
//     prefill: {
//       name: "Aman",
//       email: "jaman0120@example.com",
//       contact: "9000090000",
//     },
//     notes: {
//       address: "Razorpay Corporate Office",
//     },
//     theme: {
//       color: "#3399cc",
//     },
//   };

//   var rzp1 = new window.Razorpay(options);
//   rzp1.on("payment.failed", function (response) {
//     alert(response.error.description);
//   });

//   rzp1.open();
// };

// export default PaymentButton;


// import React, { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useSubmit from "./useSubmit";
// import ModalsComponent from "../Modal/ModalsComponent";
// import useCheckout from "../Checkout/useCheckout";

// function PaymentButton({ amount, receipt, post, formdata, user }) {
//     const buttonRef = useRef(null); 
//     const [render, setRender] = useState(false);
//     const [orderId, setOrderId] = useState("");
//     const { handleRemoveAll } = useCheckout();
//     const navigate = useNavigate();
//     const currency = "INR";

//     const { handleSubmit } = useSubmit(post, user, formdata);

//     const paymentHandler = async (e) => {
//         e.preventDefault();
//         const data = formdata;

//         const response = await fetch("http://localhost:5000/order", {
//             method: "POST",
//             body: JSON.stringify({ amount, currency, receipt }), 
//             headers: { "Content-Type": "application/json" },
//         });

//         const order = await response.json();

//         var options = {
//             key: "rzp_test_yE28CKNr1iMmgF",
//             amount,
//             currency,
//             name: "Acme Corp",
//             description: "Test Transaction",
//             image: "https://example.com/your_logo",
//             order_id: order.id,
//             handler: async function (response) {
//                 const validateRes = await fetch("http://localhost:5000/order/validate", {
//                     method: "POST",
//                     body: JSON.stringify(response),
//                     headers: { "Content-Type": "application/json" },
//                 });
//                 const jsonRes = await validateRes.json();
//                 console.log(jsonRes)
//                 setOrderId(jsonRes.orderId);
//                 if (jsonRes.msg === "Payment successfull!") {
//                     // alert("Payment Successful");
//                     await handleSubmit();
//                     handleRemoveAll();
//                     setRender(true); 
//                 }
//             },
//             prefill: {
//                 name: `${data.firstname} ${data.lastname}`,
//                 email: data.email,
//                 contact: data.phone,
//             },
//             notes: { address: data.streetAddress },
//             theme: { color: "#3399cc" },
//         };

//         var rzp1 = new window.Razorpay(options);
//         rzp1.on("payment.failed", function (response) {
//             alert(response.error.description);
//         });

//         rzp1.open();
//     };

//     useEffect(() => {
//       if (render && buttonRef.current) {
//           alert("Attempting to click buttonRef");
//           buttonRef.current.click(); // Trigger the modal opening via the button click
//       }
//   }, [render]);
  

//     return (
//         <>
//             <button
//                 onClick={paymentHandler}
//                 className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
//             >
//                 Pay Now
//             </button>
//             {render && <ModalsComponent ref={buttonRef} orderId={orderId} />}
//         </>
//     );
// }

// export default PaymentButton;


import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSubmit from "./useSubmit";
// import ModalsComponent from "../Modal/ModalsComponent";
import useCheckout from "../Checkout/useCheckout";

function PaymentButton({ amount, receipt, post, formdata, user }) {
    // const buttonRef = useRef(null); 
    const [render, setRender] = useState(false);
    const [orderId, setOrderId] = useState("");
    const { handleRemoveAll } = useCheckout();
    const navigate = useNavigate();
    const currency = "INR";

    const { handleSubmit } = useSubmit(post, user, formdata);

    const paymentHandler = async (e) => {
        e.preventDefault();
        const data = formdata;

        const response = await fetch("http://localhost:5000/order", {
            method: "POST",
            body: JSON.stringify({ amount, currency, receipt }), 
            headers: { "Content-Type": "application/json" },
        });

        const order = await response.json();

        var options = {
            key: "rzp_test_yE28CKNr1iMmgF",
            amount,
            currency,
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id,
            handler: async function (response) {
                const validateRes = await fetch("http://localhost:5000/order/validate", {
                    method: "POST",
                    body: JSON.stringify(response),
                    headers: { "Content-Type": "application/json" },
                });
                const jsonRes = await validateRes.json();
                console.log(jsonRes);
                setOrderId(jsonRes.orderId);
                if (jsonRes.msg === "Payment successfull!") {
                    await handleSubmit();
                    handleRemoveAll();
                    setRender(true); 
                }
            },
            prefill: {
                name: `${data.firstname} ${data.lastname}`,
                email: data.email,
                contact: data.phone,
            },
            notes: { address: data.streetAddress },
            theme: { color: "#3399cc" },
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
            alert(response.error.description);
        });

        rzp1.open();
    };

    // Effect to handle opening the modal programmatically
    // useEffect(() => {
    //     if (render && buttonRef.current) {
    //         buttonRef.current.click(); // Trigger the modal opening via the button click
    //     }
    // }, [render]);

    return (
        <>
            <button
                onClick={paymentHandler}
                className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
            >
                Pay Now
            </button>
            {/* {render && <ModalsComponent ref={buttonRef} orderId={orderId} />} //Pass ref here */}
        </>
    );
}

export default PaymentButton;

