import React, { useState, useEffect } from "react";
import AuthServices from "../../Services/auth";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useCheckout from "../Checkout/useCheckout";
import PaymentButton from "../Payment/PaymentButton";
import useSubmit from "../Payment/useSubmit";
import useSingleFetchCheckout from "./useSinglefetchCheckout";
import useSingleCalculateTotals from "./useSingleCalculateTotal";
import CODPaymentButton from "../Payment/CODPaymentButton";

const SingleCheckoutForm = ({ post }) => {
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
    const [OrderData, setOrderData] = useState([]);
    const [orderId, setOrderId] = useState("");
      const [isFormValid, setIsFormValid] = useState(false);

  
    const { productId } = useParams();
    const { loading, singleProductDetails } = useSingleFetchCheckout(productId);
    
    
    // Safeguard against undefined `singleProductDetails`
    const { subtotal, savings, shipping, tax, total } = singleProductDetails
      ? useSingleCalculateTotals(singleProductDetails)
      : { subtotal: 0, savings: 0, shipping: 0, tax: 0, total: 0 };
  
    const { handleRemoveAll } = useCheckout();
  
    useEffect(() => {
      async function fetchUser() {
        try {
          const result = await AuthServices.getCurrentUser();
          setUser(result.$id);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
      fetchUser();
    }, []);
  
    useEffect(() => {
      if (singleProductDetails) {
        try {
          const items = [
            {
              productId: singleProductDetails.$id || "not defined",
              productName: singleProductDetails.name,
              price: singleProductDetails.discountedPrice,
              quantity: 1, // Assuming quantity is 1, adjust as necessary
            },
          ];
  
          const newOrderId = `rcpt_${Date.now()}`;
          setOrderId(newOrderId);
          const orderData = [{
            orderId: newOrderId,
            userId: user,
            items,
            shipping: shipping.toFixed(2),
            tax: tax.toFixed(2),
            savings: savings.toFixed(2),
            subtotal: subtotal.toFixed(2),
            totalPrice: total.toFixed(2),
            status: "Done",
            createdAt: new Date().toISOString(),
          }];
          setOrderData([JSON.stringify(orderData)]);
          console.log("Order data:", orderData);
        } catch (error) {
          console.error("Error processing order data:", error);
        }
      }
    }, [singleProductDetails, user, shipping, tax, savings, subtotal, total]);
  


    const formdata = {

        firstname: { value: firstname, setValue: setFirstname },
        lastname: { value: lastname, setValue: setLastname },
        country: { value: country, setValue: setCountry },
        city: { value: city, setValue: setCity },
        state: { value: state, setValue: setState },
        zip: { value: zip, setValue: setZip },
        email: { value: email, setValue: setEmail },
        phone: { value: phone, setValue: setPhone },
        address: { value: address, setValue: setAddress },
        StreetAddress: { value: StreetAddress, setValue: setStreetAddress },
        Instructions: { value: Instructions, setValue: setInstructions },
        PaymentMethod: { value: PaymentMethod, setValue: setPaymentMethod },
        OrderData: { value: OrderData, setValue: setOrderData },
      };
    
      const { handleSubmit, loading: submitLoading } = useSubmit(
        post,
        user,
        orderId,
        formdata
      );
  
      useEffect(() => {
        const isValid = !(
          !formdata.firstname?.value ||
          !formdata.lastname?.value ||
          !formdata.phone?.value ||
          !formdata.email?.value ||
          !formdata.StreetAddress?.value ||
          !formdata.OrderData?.value
        );
        setIsFormValid(isValid);
      }, [
        formdata.firstname?.value,
        formdata.lastname?.value,
        formdata.phone?.value,
        formdata.email?.value,
        formdata.StreetAddress?.value,
        formdata.OrderData?.value,
      ]);

    return (
    <div className="bg-gray-50">
      {productId ?(
      <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <form onSubmit={handleSubmit} id="formissue" className="space-y-8 lg:col-span-2">
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
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-8">
              Order Summary
            </h2>
            {loading ? (
                <>
                  <Skeleton height={40} width="100%" />
                  <Skeleton height={40} width="100%" />
                  <Skeleton height={40} width="100%" />
                </>
              ) : productId ? (
                  <div className="mb-2 p-2 rounded-lg border-2 border-gray-400 ">
                    <div className="flex justify-between text-sm sm:text-base">
                      <div className=" ">
                        <span className="text-xs text-gray-400">{singleProductDetails.Variety ||
                          "Loading ..."}</span>
                        <br />
                        <span className="text-gray-700 font-bold ">
                          {singleProductDetails?.name || "Loading ..."}
                        </span>
                      </div>
                      <span className="text-gray-900   font-medium">
                      ₹
                        {singleProductDetails?.discountedPrice ||
                          "Loading ..."}
                      </span>
                    </div>
                  </div>
              ) : (
                <p>No items in your cart.</p>
              )}
            {loading ? (
              <Skeleton height={150} width="100%" />
            ) : (
              <div className="space-y-4 mt-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800 font-semibold">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Savings</span>
                  <span className="text-gray-800 font-semibold">
                    -₹{savings.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-800 font-semibold">
                    ₹{shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-800 font-semibold">
                    ₹{tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800 font-semibold">Total</span>
                  <span className="text-gray-800 font-semibold">
                    ₹{total.toFixed(2)}
                  </span>
                </div>
                {/* Submit Button */}
                <div className="mt-8">
                    {isFormValid && PaymentMethod === "razorpay" ? (
                      <PaymentButton
                        amount={total * 100}
                        receipt={orderId}
                        post={post}
                        formdata={formdata}
                        user={user}
                        orderId={orderId}
                      />
                    ) : (
                      isFormValid && (
                        <CODPaymentButton
                          // disabled={submitLoading}
                          // onClick={handleCOD}
                          amount={total * 100}
                          receipt={orderId}
                          post={post}
                          formdata={formdata}
                          user={user}
                          orderId={orderId}
                        />
                      )
                    )}
                  </div>
              </div>
            )}
          </div>
        </div>

      </div>
      ):<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">Cart is Empty</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">No items in the Cart</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Add items to Cart for Checkout.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={'/'}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <a className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr; jaman0120@gmail.com</span>
          </a>
        </div>
      </div>
    </main>
      }
    </div>
  );
};

export default SingleCheckoutForm;
