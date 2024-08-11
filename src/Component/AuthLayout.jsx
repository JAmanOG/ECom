import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthLayout({ children, authenticate = true }) {
  const authstatus = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (authstatus === undefined) {
      setLoading(true);
    } else if (authenticate && !authstatus) {
      navigate("/login");
    } else if (!authenticate && authstatus) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [authstatus, authenticate, navigate]);

  return loading ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
