// import React, { useState,useEffect } from "react";
// import { databases } from "../../Services/database";
// import AuthServices from "../../Services/auth";
// import conf from "../../Services/conf";
// import { useNavigate } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import useFetchCheckout from "./useFetchCheckout";
// import useCheckout from "./useCheckout";
// import useCalculateTotals from "../Cart/useCalculateTotal";
// import PaymentButton from "../Payment/PaymentButton";

// const CheckoutForm = ({ post }) => {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [zip, setZip] = useState('');
//   const [user, setUser] = useState('');
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [StreetAddress, setStreetAddress] = useState("");
//   const [Instructions, setInstructions] = useState("");
//   const [PaymentMethod, setPaymentMethod] = useState("");

//   const { loading, productDetails } = useFetchCheckout();
//   const { checkout } = useCheckout();
//   const navigate = useNavigate();
//   const { subtotal, savings, shipping, tax, total } = useCalculateTotals(
//     checkout,
//     productDetails
//   );
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const result = await AuthServices.getCurrentUser();
//         setUser(result.email);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = {
//         firstname,
//         lastname,
//         country,
//         city,
//         state,
//         zip,
//         email,
//         phone,
//         address,
//         StreetAddress,
//         Instructions,
//         PaymentMethod,
//         user,
//       };
//       if (post) {
//         await databases.updateDocument(
//           conf.appwriteDatabaseId,
//           conf.collectionId,
//           post.$id,
//           data
//         );
//       } else {
//         await databases.createDocument(
//           conf.appwriteDatabaseId,
//           conf.appwriteProductformsCollectionId,
//           "unique()",
//           data
//         );
//       }

//       setFirstname("");
//       setLastname("");
//       setCountry("");
//       setCity("");
//       setState("");
//       setZip("");
//       setEmail("");
//       setPhone("");
//       setAddress("");
//       setStreetAddress("");
//       setInstructions("");
//       setPaymentMethod("");
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   return (
//     <div className="bg-gray-50">
//       <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//   <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-2">
//     <div className="space-y-12">
//       {/* Billing Address Section */}
//       <div className="bg-white rounded-2xl shadow-2xl p-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-8">
//           Billing Address
//         </h2>
//         {loading ? (
//           <>
//             <Skeleton height={40} width="100%" />
//             <Skeleton height={40} width="100%" />
//             <Skeleton height={40} width="100%" />
//           </>
//         ) : (
//           <div className="space-y-8">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//               <div>
//                 <label
//                   htmlFor="first-name"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="first-name"
//                   name="first-name"
//                   value={firstname}
//                   onChange={(e) => setFirstname(e.target.value)}
//                   className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="last-name"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="last-name"
//                   value={lastname}
//                   onChange={(e) => setLastname(e.target.value)}
//                   name="last-name"
//                   className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="country-name"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   id="country-name"
//                   placeholder="India"
//                   value={country}
//                   onChange={(e) => setCountry(e.target.value)}
//                   name="country-name"
//                   className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="state-name"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   id="state-name"
//                   placeholder="Maharashtra"
//                   value={state}
//                   onChange={(e) => setState(e.target.value)}
//                   name="state-name"
//                   className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="city-name"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   id="city-name"
//                   placeholder="Mumbai"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   name="city-name"
//                   className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone-number"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="number"
//                   id="phone-number"
//                   placeholder="123-456-789"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   name="phone-number"
//                   className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email-id"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Email Id
//                 </label>
//                 <input
//                   type="email"
//                   id="email-id"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="abc@xyz.com"
//                   name="email-id"
//                   className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Delivery Address Section */}
//       <div className="bg-white rounded-2xl shadow-2xl p-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-8">
//           Delivery Address
//         </h2>
//         {loading ? (
//           <>
//             <Skeleton height={40} width="100%" />
//             <Skeleton height={40} width="100%" />
//             <Skeleton height={40} width="100%" />
//           </>
//         ) : (
//           <div className="space-y-4">
//             <div>
//               <label
//                 htmlFor="address"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Address
//               </label>
//               <textarea
//                 type="text"
//                 id="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 placeholder="local address"
//                 name="address"
//                 className="p-2 mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="street-name"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Street name
//               </label>
//               <input
//                 type="text"
//                 id="street-name"
//                 value={StreetAddress}
//                 onChange={(e) => setStreetAddress(e.target.value)}
//                 placeholder="123 Street Name"
//                 name="street-name"
//                 className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="zip-name"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Postal Code:
//               </label>
//               <input
//                 type="number"
//                 id="zip-name"
//                 value={zip}
//                 onChange={(e) => setZip(e.target.value)}
//                 placeholder="400000"
//                 name="zip-name"
//                 className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="instructions"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Special instructions for delivery
//               </label>
//               <textarea
//                 type="text"
//                 id="instructions"
//                 value={Instructions}
//                 onChange={(e) => setInstructions(e.target.value)}
//                 placeholder="Enter any special instructions..."
//                 name="instructions"
//                 className="p-2 mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
//               />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Payment Method Section */}
//       <div className="bg-white rounded-2xl shadow-2xl p-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-8">
//           Payment Method
//         </h2>
//         <div className="flex space-x-6">
//           <div>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="payment-method"
//                 value="razorpay"
//                 checked={PaymentMethod === "razorpay"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="form-radio"
//               />
//               <span className="ml-2">Razorpay</span>
//             </label>
//           </div>
//           <div>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="payment-method"
//                 value="cod"
//                 checked={PaymentMethod === "cod"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="form-radio"
//               />
//               <span className="ml-2">Cash on Delivery</span>
//             </label>
//           </div>
//         </div>
//       </div>

//     </div>
//   </form>

//           {/* Order Summary Section */}
//           <div className="bg-white rounded-2xl shadow-2xl p-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-8">
//               Order Summary
//             </h2>
//             {loading ? (
//               <Skeleton height={150} width="100%" />
//             ) : (
//               <div className="space-y-4">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Subtotal</span>
//                   <span className="text-gray-800 font-semibold">
//                     ₹{subtotal.toFixed(2)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Savings</span>
//                   <span className="text-gray-800 font-semibold">
//                     -₹{savings.toFixed(2)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="text-gray-800 font-semibold">
//                     ₹{shipping.toFixed(2)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Tax</span>
//                   <span className="text-gray-800 font-semibold">
//                     ₹{tax.toFixed(2)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-800 font-semibold">Total</span>
//                   <span className="text-gray-800 font-semibold">
//                     ₹{total.toFixed(2)}
//                   </span>
//                 </div>
//                 {/* Submit Button */}
//               <div className="mt-8">
//                 {PaymentMethod === "razorpay" ? (
//                   <PaymentButton amount="100" receipt="sad"/>
//                 ) : (
//                   <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"
//                   >
//                     Pay Now
//                   </button>
//                 )}
//               </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutForm;
import React, { useState, useEffect } from "react";
import { databases } from "../../Services/database";
import AuthServices from "../../Services/auth";
import conf from "../../Services/conf";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFetchCheckout from "./useFetchCheckout";
import useCheckout from "./useCheckout";
import useCalculateTotals from "../Cart/useCalculateTotal";
import PaymentButton from "../Payment/PaymentButton";

const CheckoutForm = ({ post }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [StreetAddress, setStreetAddress] = useState("");
  const [Instructions, setInstructions] = useState("");
  const [PaymentMethod, setPaymentMethod] = useState("");

  const { loading, productDetails } = useFetchCheckout();
  const { checkout } = useCheckout();
  const navigate = useNavigate();
  const { subtotal, savings, shipping, tax, total } = useCalculateTotals(
    checkout,
    productDetails
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await AuthServices.getCurrentUser();
        setUser(result.email);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        firstname,
        lastname,
        country,
        city,
        state,
        zip,
        email,
        phone,
        address,
        StreetAddress,
        Instructions,
        PaymentMethod,
        user,
      };
      if (post) {
        await databases.updateDocument(
          conf.appwriteDatabaseId,
          conf.collectionId,
          post.$id,
          data
        );
      } else {
        await databases.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteProductformsCollectionId,
          "unique()",
          data
        );
      }

      // Reset form fields
      setFirstname("");
      setLastname("");
      setCountry("");
      setCity("");
      setState("");
      setZip("");
      setEmail("");
      setPhone("");
      setAddress("");
      setStreetAddress("");
      setInstructions("");
      setPaymentMethod("");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-2">
            <div className="space-y-12">
              {/* Billing Address Section */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-8">
                  Billing Address
                </h2>
                {loading ? (
                  <>
                    <Skeleton height={40} width="100%" />
                    <Skeleton height={40} width="100%" />
                    <Skeleton height={40} width="100%" />
                  </>
                ) : (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-600"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          name="first-name"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          name="last-name"
                          className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="country-name"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="country-name"
                          placeholder="India"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          name="country-name"
                          className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="state-name"
                          className="block text-sm font-medium text-gray-600"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          id="state-name"
                          placeholder="Maharashtra"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          name="state-name"
                          className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="city-name"
                          className="block text-sm font-medium text-gray-600"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city-name"
                          placeholder="Mumbai"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          name="city-name"
                          className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone-number"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="phone-number"
                          placeholder="123-456-789"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          name="phone-number"
                          className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email-id"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Email Id
                        </label>
                        <input
                          type="email"
                          id="email-id"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="abc@xyz.com"
                          name="email-id"
                          className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Delivery Address Section */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-8">
                  Delivery Address
                </h2>
                {loading ? (
                  <>
                    <Skeleton height={40} width="100%" />
                    <Skeleton height={40} width="100%" />
                    <Skeleton height={40} width="100%" />
                  </>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Address
                      </label>
                      <textarea
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="local address"
                        name="address"
                        className="p-2 mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="street-name"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Street name
                      </label>
                      <input
                        type="text"
                        id="street-name"
                        value={StreetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        placeholder="123 Street Name"
                        name="street-name"
                        className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zip-name"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Postal Code:
                      </label>
                      <input
                        type="number"
                        id="zip-name"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        placeholder="400000"
                        name="zip-name"
                        className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="instructions"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Special instructions for delivery
                      </label>
                      <textarea
                        type="text"
                        id="instructions"
                        value={Instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Enter any special instructions..."
                        name="instructions"
                        className="p-2 mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Method Section */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-8">
                  Payment Method
                </h2>
                <div className="flex space-x-6">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="payment-method"
                        value="razorpay"
                        checked={PaymentMethod === "razorpay"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="form-radio"
                      />
                      <span className="ml-2">Razorpay</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="payment-method"
                        value="cod"
                        checked={PaymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="form-radio"
                      />
                      <span className="ml-2">Cash on Delivery</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Order Summary Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Order Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Savings</p>
                <p>${savings}</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Shipping</p>
                <p>${shipping}</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Tax</p>
                <p>${tax}</p>
              </div>
              <div className="flex justify-between font-semibold text-gray-800">
                <p>Total</p>
                <p>${total}</p>
              </div>
            </div>

            {/* Pay Button (Submit) */}
            {PaymentMethod === "razorpay" ? (
              <PaymentButton amount="500" receipt="receipt" />
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out"
              >
                Pay
              </button>
            )}
              <div className="mt-6 text-center text-sm">
              <button onClick={()=>navigate(-1)} className="text-blue-600 hover:underline focus:outline-none">
                Return to Shopping
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
