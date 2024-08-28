import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthServices from '../Services/auth';
import { logout as authLogout } from '../Rtk/Slices/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await AuthServices.logout();
      dispatch(authLogout());
      navigate('/login');
    } catch (error) {
      console.error("Logout Error: ", error);
      alert("An error occurred while logging out. Please try again.");
    }
  };

  return (
    <button 
      onClick={handleLogout} 
      className="logout-button px-2 py-1 text-white rounded text-center align-middle hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      aria-label="Logout"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
