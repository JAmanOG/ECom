import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./Component/ErrorBoundary.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Rtk/Store/store.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./Pages/Admin.jsx";
import Layout from "./Component/Layout/Layout.jsx";
import Sign_up from "./Pages/Sign_up.jsx";
import LoginC from "./Pages/CLogin.jsx";
import AuthLayout from "./Component/AuthLayout.jsx";
import App from "./App.jsx";
import Dashboard from "./Component/Profile/Dashboard.jsx";
import Product from "./Component/Product/Product.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
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
              <Route
                path="/my/Dashboard"
                element={
                  <AuthLayout authenticate>
                    <Dashboard />
                  </AuthLayout>
                }
              />
              <Route
                path="/:category/:subcategory/:subsubcategory/:slug"
                element={
                  <AuthLayout authenticate>
                    <Product />
                  </AuthLayout>
                }
              />
              <Route path="/*" element={<Layout />}>
                <Route path="*" element={<App />} /> {/* Default route */}
              </Route>
            </Routes>
          </ErrorBoundary>
        </Router>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);

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
