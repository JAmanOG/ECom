import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './Component/ErrorBoundary.jsx';
import './index.css';
import { Provider, useDispatch } from 'react-redux';
import { store } from './Rtk/Store/store.js'; // Adjust the import path based on your file structure
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './Pages/Admin.jsx';
import Layout from './Component/Layout/Layout.jsx';
import Sign_up from './Pages/Sign_up.jsx';
import LoginC from './Pages/CLogin.jsx';
import AuthLayout from './Component/AuthLayout.jsx';
import authServices from './Services/auth.js';

// const [loading, setLoading] = useState(true)
// const dispatch = useDispatch()

// useEffect(() => {
//   authServices.getCurrentUser()
//     .then((userData) => {
//       if (userData) {
//         dispatch(login({ userData }));
//       } else {
//         dispatch(logout());
//       }
//     })
//     .finally(() => setLoading(false));
// }, []);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route 
              path="/login" 
              element={
                <AuthLayout authenticate={false}>
                  <LoginC />
                </AuthLayout>
              } 
            />
            <Route 
              path="/signup" 
              element={
                <AuthLayout authenticate={false}>
                  <Sign_up />
                </AuthLayout>
              } 
            />
            <Route path="/*" element={<Layout />}>
              <Route path="*" element={<div>Main Content Here</div>} /> {/* Default route */}
            </Route>
          </Routes>
        </ErrorBoundary>
      </Router>
    </Provider>
  </React.StrictMode>,
);
