import React, { useState, useEffect } from "react";
import AuthServices from "../../Services/auth";
import { Link } from "react-router-dom";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await AuthServices.getCurrentUser();
        setUserData(result);
        console.log("User data:", result);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user logged in</div>;
  }

  return (
    <div>
      <div className="items-center w-max flex m-5">
        <Link className="flex font-bold" to={`/`}>
        <span class="material-symbols-outlined no-underline">arrow_back_ios</span>{" "}
        <span>Back to Home</span>
        </Link>
      </div>
      <h1 className="text-3xl align-middle justify-center flex font-bold">
        Dashboard
      </h1>
      <div className="flex justify-center align-middle">
        <div className="p-5 w-min border-black flex border m-6">
          <div className="w-max">
            <img
              className="w-[200px] h-[200px]"
              src="/src/assets/dummy-profile-pic-300x300-1.png"
              alt="404 error"
            />
          </div>
          <div className="my-auto mx-8 w-max space-y-4 ">
            <h2>Name: {userData.name}</h2>
            <h2>Email: {userData.email}</h2>
          </div>
        </div>
      </div>
      <div className="grid-flow-col grid m-auto justify-center align-middle gap-8">
        <div className="p-5 border border-gray-400 rounded-xl">
            <Link to="/orders">
          <h4 className="align-middle justify-center flex">
            Orders
          </h4>
          <img
            className="link-icon"
            src="https://constant.myntassets.com/mymyntra/assets/img/profile-orders.png"
            ></img>
            </Link>
        </div>
          <div className="p-5 border-gray-400 border rounded-xl">
        <Link>
            <h4 className="align-middle justify-center flex">Wishlist</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="120px"
              viewBox="0 -960 960 960"
              width="120px"
              fill="gray"
            >
              <path d="m480-121-41-37q-105.77-97.12-174.88-167.56Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.15 60.5-150.58Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.42Q880-733.15 880-643q0 46-16.5 91T806-451.5Q765-396 695.88-325.56 626.77-255.12 521-158l-41 37Zm0-79q101.24-93 166.62-159.5Q712-426 750.5-476t54-89.14q15.5-39.13 15.5-77.72 0-66.14-42-108.64T670.22-794q-51.52 0-95.37 31.5T504-674h-49q-26-56-69.85-88-43.85-32-95.37-32Q224-794 182-751.5t-42 108.82q0 38.68 15.5 78.18 15.5 39.5 54 90T314-358q66 66 166 158Zm0-297Z" />
            </svg>
        </Link>
          </div>
        <div className="p-5 border-gray-400 border rounded-xl">
            <Link>
          <h4 className="align-middle justify-center flex">
            Address
          </h4>
          <img
            className="link-icon"
            src="https://constant.myntassets.com/mymyntra/assets/img/profile-address.png"
            />
            </Link>
        </div>
        {/* <button
          className="btn btn-outline-danger my-1 mx-2"
          onClick={AuthServices.logout}
        >
          Logout
        </button> */}
      </div>
    </div>
  );
}

export default Dashboard;