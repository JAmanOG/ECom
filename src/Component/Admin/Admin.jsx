import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-900 text-white min-h-screen">
        <div className="flex items-center justify-center h-16 bg-gray-800">
          <h1 className="text-2xl font-semibold">Admin</h1>
        </div>
        <nav className="mt-10">
          <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800" to="/admin/add-product">Add Products</Link>
          <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800" to="/admin/manage-product">Mange Product</Link>
          <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800" to="/admin/manage-order">Order Placed</Link>
        </nav>
      </div>
    );
  };


export const Navbar = () => {
    return (
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div>
          <h1 className="text-2xl font-semibold">TaskList</h1>
          <p className="text-sm text-gray-500">Dashboard / TaskList</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/300?img=1" alt="User 1" />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Logout</button>
        </div>
      </div>
    );
  };

export const TaskList = () => {
    return (
      <div className="p-4 space-y-4">

      </div>
    );
  };
