import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome,FaUserCircle, FaBox, FaListAlt, FaShoppingCart } from 'react-icons/fa';
import LogoutButton from '../../authentication/logoutbtn';

export const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="flex items-center justify-center h-16 bg-gray-800">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </div>
      <nav className="mt-10">
        <Link
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            location.pathname === '/admin/add-product' ? 'bg-gray-800' : 'hover:bg-gray-800'
          }`}
          to="/admin/add-product"
        >
          <FaBox className="mr-3" /> Add Products
        </Link>
        <Link
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            location.pathname === '/admin/manage-product' ? 'bg-gray-800' : 'hover:bg-gray-800'
          }`}
          to="/admin/manage-product"
        >
          <FaListAlt className="mr-3" /> Manage Products
        </Link>
        <Link
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
            location.pathname === '/admin/manage-order' ? 'bg-gray-800' : 'hover:bg-gray-800'
          }`}
          to="/admin/manage-order"
        >
          <FaShoppingCart className="mr-3" /> Orders
        </Link>
      </nav>
    </div>
  );
};

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-200">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200 transition duration-200"
          >
            <FaUserCircle className="w-8 h-8 text-gray-600" />
            <span className="text-gray-600 font-semibold">Admin</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
              <a href="/my/Dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
              <a href="/logout"className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              <LogoutButton className='bg-none' />
              </a>
            </div>
          )}
        </div>
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
