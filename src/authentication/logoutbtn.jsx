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
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
