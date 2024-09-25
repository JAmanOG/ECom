// // PrivateRoute.js
// import React, { useEffect, useState } from 'react';
// import AuthServices from '../../Services/auth';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Define the admin email
//   const adminEmail = 'testadmin@gmail.com'; // The specific admin email you want to check

//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         const response = await AuthServices.account.get(); // Get current user data
//         console.log("User Response:", response);
        
//         // Check if user is authenticated
//         setIsAuthenticated(true);
        
//         // Check if user's email matches the admin email
//         setIsAdmin(response.email === adminEmail); // Strictly check if email matches
//       } catch (error) {
//         console.error("Error fetching user data:", error); // Improved error logging
//         setIsAuthenticated(false);
//         setIsAdmin(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkSession();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading indicator while checking session
//   }

//   return isAuthenticated && isAdmin ? children : null;
// };

// export default PrivateRoute;

// PrivateRoute.js
import React, { useEffect, useState } from 'react';
import AuthServices from '../../Services/auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await AuthServices.account.get(); // Get current user data
        console.log("User Response:", response);
        
        // Assuming roles are directly available on the user object
        setIsAuthenticated(true);
        const userRoles = response.labels[0] // Ensure 'roles' is defined
        console.log("User Roles:", userRoles);
        
        // Check if user has 'admin' role
        setIsAdmin(userRoles.includes('admin'));
      } catch (error) {
        console.error("Error fetching user data:", error); // Improved error logging
        setIsAuthenticated(false);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking session
  }

  return isAuthenticated && isAdmin ? children :  <Navigate to="/login" />;
};

export default PrivateRoute;
