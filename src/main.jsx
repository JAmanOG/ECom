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
import WishlistComponent from "./Component/Wishlist/Wishlist.jsx";
import CheckoutForms from "./Component/Checkout/CheckoutForms.jsx";
import Carts from "./Component/Cart/Carts.jsx";
import CheckoutPage from "./Component/Checkout/Checkout.jsx";
import OrderConfirmation from "./Component/Modal/OrderConfirmationModal.jsx";
import SingleCheckoutForm from "./Component/SingleCheckout/SingleProductCheckout.jsx";


import OrderPage from "./Component/Modal/OrderPage.jsx";
import InvoiceComponent from "./Component/Invoice/InvoiceComponent.jsx";
import ViewOrderComponent from "./Component/OrderPage/ViewOrderComponent.jsx";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
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
                path="/orders"
                element={
                  <AuthLayout authenticate>
                    <OrderPage />
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
                path="/my/Wishlist"
                element={
                  <AuthLayout authenticate>
                    <WishlistComponent />
                  </AuthLayout>
                }
              />
              <Route
                path="/my/CheckoutPage"
                element={
                  <AuthLayout authenticate>
                    <CheckoutPage />
                  </AuthLayout>
                }
              />
              <Route
                path="/my/CheckoutForm"
                element={
                  <AuthLayout authenticate>
                    <CheckoutForms />
                  </AuthLayout>
                }
              />
              <Route
                path="/my/CheckoutForm/:productId"
                element={
                  <AuthLayout authenticate>
                    <SingleCheckoutForm />
                  </AuthLayout>
                }
              />
              <Route
                path="/order/order-confirmation"
                element={
                  <AuthLayout authenticate>
                    <OrderConfirmation />
                  </AuthLayout>
                }
              />
              <Route
                path="/my/Cart"
                element={
                  <AuthLayout authenticate>
                    <Carts />
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
                path="/my/order/invoice"
                element={
                  <AuthLayout authenticate>
                    <InvoiceComponent />
                  </AuthLayout>
                }
              />
              <Route path="/view-order/:orderId" element={
                <ViewOrderComponent/>
                } />

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
  // </React.StrictMode>
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
