import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthLayout({ children, authenticate = true }) {
  const authstatus = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Only perform navigation if authstatus is not undefined
    if (authstatus !== undefined) {
      if (authenticate && !authstatus) {
        console.log("Redirecting to login...", authstatus, authenticate);
        // Redirect to login if not authenticated
        navigate("/login");
      } else if (!authenticate && authstatus) {
        // Redirect to home if already authenticated
        navigate("/");
      } else {
        // No need to redirect, so set loading to false
        setLoading(false);
      }
    }
  }, [authstatus, authenticate, navigate]);

  return loading ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
