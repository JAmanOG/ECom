import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthLayout({ children, authenticate = true }) {
  const authStatus = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticate && authStatus !== "authenticated") {
      navigate("/login");
    } else if (!authenticate && authStatus === "authenticated") {
      navigate("/");
    }
    setLoading(false);
  }, [authStatus, authenticate, navigate]);

  return (
    loading ? <h1>Loading...</h1> : <>{children}</>
  );
}

export default AuthLayout;
