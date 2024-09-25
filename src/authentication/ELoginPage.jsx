import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../Rtk/Slices/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import AuthServices from "../Services/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");

  const googleAuth = async (e) => {
    e.preventDefault();
    try {
      console.log("Initiating Google OAuth2 session...");
      await AuthServices.account.createOAuth2Session(
        "google",
        "http://localhost:5173/",
        "http://localhost:5173/login"
      );

      console.log("Fetching current user data...");
      const userData = await AuthServices.getCurrentUser();
      if (userData) {
        console.log("User data retrieved:", userData);
        dispatch(authLogin(userData));
        navigate("/");
      } else {
        console.error("Failed to fetch user data after OAuth login.");
        setError("Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Google authentication error:", error);
      setError("An error occurred during Google authentication.");
    }
  };

  const login = async (data) => {
    setError("");
    try {
      console.log("Logging in with data:", data);
      const session = await AuthServices.login(data);
      if (session) {
        console.log("Session established:", session);
        const userData = await AuthServices.getCurrentUser();
        if (userData) {
          console.log("User data retrieved:", userData);
          dispatch(authLogin(userData));
          navigate("/");
        } else {
          console.error("Failed to fetch user data after login.");
          setError("Failed to fetch user data.");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6 lg:p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105">
        <div className="mb-6 text-center">
          <img
            alt="Your Company"
            src="/Profile.png"
            className="mx-auto h-12 w-auto transition-transform transform-gpu hover:rotate-12"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 transition-opacity duration-300 ease-in-out hover:opacity-80">
            Sign in to your account
          </h2>
        </div>

        {error && <p className="text-red-600 text-center mb-4 animate-pulse">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address"
                }
              })}
              className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-105`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-105`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform-gpu hover:scale-105"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6">
          <div className="flex items-center justify-center space-x-4">
            <button
              type="button"
              onClick={googleAuth}
              className="flex items-center space-x-2 w-max py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150"
            >
              <img src="/google.svg" alt="Google Icon" className="h-6 w-6" />
              <span className="text-gray-800 font-medium">Sign in with Google</span>
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Not a member?{' '}
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
