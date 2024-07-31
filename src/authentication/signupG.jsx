
// const googleAuth = async (e) => {
//     e.preventDefault();
//     AuthServices.account.createOAuth2Session(
//         "google",
//         "http://localhost:5173/",
//         "http://localhost:5173/login"
//         )}
        

// export default googleAuth

import React from 'react'
import AuthServices from '../Services/auth';

function LoginG() {
  const googleAuth = async (e) => {
    e.preventDefault();
    try {
      await AuthServices.account.createOAuth2Session(
        "google",
        "http://localhost:5173/", // Redirect URL after successful login
        "http://localhost:5173/login" // Redirect URL after login failure or cancellation
      );
    } catch (error) {
      console.error("Google authentication error:", error);
    }
  };

  return (
    <div className='flex items-center justify-center mt-5'>
      <div className='h-10 w-10'>

      <img src="/src/assets/google.svg" alt="" srcset="" />
      </div>
    <button
      type="button"
      onClick={googleAuth} // Attach the click handler to the button
      className=" w-max py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150"
      >
      <span className="text-gray-800 font-medium">Sign Up with Google</span>
    </button>
      </div>
  );
}

export default LoginG;