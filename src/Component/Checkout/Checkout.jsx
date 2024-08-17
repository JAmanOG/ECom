import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <body className="bg-gray-50">
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* <!-- Responsive Grid Layout --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* <!-- Left Column: Billing, Delivery, Payment --> */}
            <div className="lg:col-span-2 space-y-12">
                {/* <!-- Billing Address Section --> */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-8">Billing Address</h2>
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <label for="first-name" className="block text-sm font-medium text-gray-600">First Name</label>
                                <input type="text" id="first-name" name="first-name"
                                    className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"/>
                            </div>
                            <div>
                                <label for="last-name" className="block text-sm font-medium text-gray-600">Last Name</label>
                                <input type="text" id="last-name" name="last-name"
                                    className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 text-sm sm:text-base"/>
                            </div>
                        </div>
                    </form>
                </div>

                {/* <!-- Delivery Address Section --> */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-8">Delivery Address</h2>
                    {/* <!-- Delivery form fields --> */}
                </div>

                {/* <!-- Payment Details Section --> */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-8">Payment Details</h2>
                    {/* <!-- Payment options --> */}
                </div>
            </div>

            {/* <!-- Right Column: Order Summary --> */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-8">Order Summary</h2>
                <div className="space-y-6">
                    {/* <!-- Order item example --> */}
                    <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-gray-700">PC system All in One APPLE iMac (2023)</span>
                        <span className="text-gray-900 font-medium">$1,499</span>
                    </div>
                    {/* <!-- Repeat for other items --> */}

                    {/* <!-- Summary Section --> */}
                    <div className="border-t border-gray-200 pt-8">
                        <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-900 font-semibold">Subtotal</span>
                            <span className="font-bold text-gray-900">$7,000.00</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-900 font-semibold">Savings</span>
                            <span className="font-bold text-gray-900">$0</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-900 font-semibold">Store Pickup
                            </span>
                            <span className="font-bold text-gray-900">$50</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-900 font-semibold">Tax</span>
                            <span className="font-bold text-gray-900">$199.00</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-900 font-semibold">Total</span>
                            <span className="font-bold text-gray-900">$7,249.00</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        className="w-full bg-blue-600 text-white py-4 rounded-xl shadow-xl hover:bg-blue-700 transition duration-150 ease-in-out text-lg font-semibold">Continue
                        to Payment</button>
                </div>
                <div className="mt-6 text-center text-sm">
                    <Link href="#" className="text-blue-600 hover:underline">Return to Shopping</Link>
                </div>
            </div>
        </div>
    </div>
</body>
  )
}

export default Checkout