import React from 'react';
import AuthServices from '../Services/auth';
import { useDispatch } from 'react-redux';
import { login as authLogin } from "../Rtk/Slices/authSlice";
import { useNavigate } from 'react-router-dom';

function LoginG() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleAuth = async (e) => {
    e.preventDefault();
    try {
      // Initiate Google OAuth2 session
      await AuthServices.account.createOAuth2Session(
        "google",
        "http://localhost:5173/", // Redirect URL after successful login
        "http://localhost:5173/login" // Redirect URL after login failure or cancellation
      );

      const userData = await AuthServices.getCurrentUser();
      if (userData) {
        dispatch(authLogin({ userData }));
        navigate("/");
      } else {
        // Handle case where user data is not available
        console.error("Failed to fetch user data after OAuth login.");
      }
    } catch (error) {
      console.error("Google authentication error:", error);
    }
  };

  return (
    <div className='flex items-center justify-center mt-5'>
      <div className='h-10 w-10'>
        <img src="/src/assets/google.svg" alt="Google Icon" />
      </div>
      <button
        type="button"
        onClick={googleAuth}
        className=" w-max py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150"
      >
        <span className="text-gray-800 font-medium">Sign in with Google</span>
      </button>
    </div>
  );
}

export default LoginG;