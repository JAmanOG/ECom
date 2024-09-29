// import React from "react";
// import {Link, Outlet} from "react-router-dom";
// import { Sidebar } from "./Admin";
// import { Navbar } from "./Admin";

// export const AdminLayout = () => {
//     return (
//         <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Navbar />
        
//         <Outlet />
//         <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-5">
//       <div className="bg-white shadow-2xl rounded-lg p-10 max-w-3xl w-full text-center">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the Admin Dashboard</h1>
//         <p className="text-lg text-gray-700 mb-8">
//           Manage users, products, orders, and more with your administrative privileges. You have full control over the platform's operations.
//         </p>
        
//         <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
//           <Link to='add-product' className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
//             Add Product
//           </Link>
//           <Link to='manage-product' className="bg-gray-100 text-gray-900 py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
//             Manage Product
//           </Link>
//           <Link to='manage-order' className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300">
//             Orders
//           </Link>
//         </div>

//         <div className="mt-10 text-sm text-gray-500">
//           <p>If you need help, feel free to contact the support team.</p>
//         </div>
//       </div>
//     </div>

//       </div>
//     </div>
//     );
// };


// export default AdminLayout;



import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Admin";
import { Navbar } from "./Admin";

export const AdminLayout = () => {
    const location = useLocation();
    const isDashboard = location.pathname === '/admin';

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                
                {isDashboard && (
                    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-5">
                        <div className="bg-white shadow-2xl rounded-lg p-10 max-w-3xl w-full text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the Admin Dashboard</h1>
                            <p className="text-lg text-gray-700 mb-8">
                                Manage users, products, orders, and more with your administrative privileges. You have full control over the platform's operations.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <Link to='add-product' className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
                                    Add Product
                                </Link>
                                <Link to='manage-product' className="bg-gray-100 text-gray-900 py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300">
                                    Manage Product
                                </Link>
                                <Link to='manage-order' className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300">
                                    Orders
                                </Link>
                            </div>
                            <div className="mt-10 text-sm text-gray-500">
                                <p>If you need help, feel free to contact the support team.</p>
                            </div>
                        </div>
                    </div>
                )}

                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
