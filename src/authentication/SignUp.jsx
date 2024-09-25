import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Logo from "../logo";
import Button from "../Component/ProductComponent/Button";
import Input from "../Component/ProductComponent/Input";
import AuthServices from "../Services/auth";
import { login as authLogin } from "../Rtk/Slices/authSlice";

// Dummy Google authentication function
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
    alert("An error occurred: " + (error.response ? error.response.data.message : error.message));
  }
};

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");

  const signup = async (data) => {
    setError("");
    try {
      console.log("Sign Up Data: ", data);
      const userAccount = await AuthServices.createAccount(data);
      if (userAccount) {
        const userData = await AuthServices.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      console.error("Sign Up Error: ", error);
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
            Create a new account
          </h2>
        </div>

        {error && <p className="text-red-600 text-center mb-4 animate-pulse">{error}</p>}

        <form onSubmit={handleSubmit(signup)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-105`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <Input
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
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition-transform duration-300 ease-in-out transform hover:scale-105`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform-gpu hover:scale-105"
          >
            Sign Up
          </Button>
        </form>

        <div className="mt-6">
          <div className="flex items-center justify-center space-x-4">
            <button
              type="button"
              onClick={googleAuth}
              className="flex items-center space-x-2 w-max py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in-out duration-150"
            >
              <img src="/google.svg" alt="Google logo" className="h-10 w-10" />
              <span className="text-gray-800 font-medium">Sign Up with Google</span>
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
