// import React from "react";
// import ReactDOM from "react-dom/client";
// import ErrorBoundary from "./Component/ErrorBoundary.jsx";
// import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./Rtk/Store/store.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminPage from "./Pages/Admin.jsx";
// import Layout from "./Component/Layout/Layout.jsx";
// import Sign_up from "./Pages/Sign_up.jsx";
// import LoginC from "./Pages/CLogin.jsx";
// import AuthLayout from "./Component/AuthLayout.jsx";
// import App from "./App.jsx";
// import Dashboard from "./Component/Profile/Dashboard.jsx";
// import Product from "./Component/Product/Product.jsx";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// import WishlistComponent from "./Component/Wishlist/Wishlist.jsx";
// import CheckoutForms from "./Component/Checkout/CheckoutForms.jsx";
// import Carts from "./Component/Cart/Carts.jsx";
// import CheckoutPage from "./Component/Checkout/Checkout.jsx";
// import OrderConfirmation from "./Component/Modal/OrderConfirmationModal.jsx";
// import SingleCheckoutForm from "./Component/SingleCheckout/SingleProductCheckout.jsx";
// import TagsRoutes from "./Component/CategoryRoutes/TagsRoutes.jsx";

// import OrderPage from "./Component/Modal/OrderPage.jsx";
// import InvoiceComponent from "./Component/Invoice/InvoiceComponent.jsx";
// import ViewOrderComponent from "./Component/OrderPage/ViewOrderComponent.jsx";

// let persistor = persistStore(store);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//     <PersistGate persistor={persistor}>
//       <Provider store={store}>
//         <Router>
//           <ErrorBoundary>
//             <Routes>
//               <Route path="/admin" element={<AdminPage />} />
//               <Route
//                 path="/login"
//                 element={
//                   <AuthLayout authenticate={false}>
//                     <LoginC />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/orders"
//                 element={
//                   <AuthLayout authenticate>
//                     <OrderPage />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/signup"
//                 element={
//                   <AuthLayout authenticate={false}>
//                     <Sign_up />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/my/Wishlist"
//                 element={
//                   <AuthLayout authenticate>
//                     <WishlistComponent />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/my/CheckoutPage"
//                 element={
//                   <AuthLayout authenticate>
//                     <CheckoutPage />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/my/CheckoutForm"
//                 element={
//                   <AuthLayout authenticate>
//                     <CheckoutForms />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/my/CheckoutForm/:productId"
//                 element={
//                   <AuthLayout authenticate>
//                     <SingleCheckoutForm />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/order/order-confirmation"
//                 element={
//                   <AuthLayout authenticate>
//                     <OrderConfirmation />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/my/Cart"
//                 element={
//                   <AuthLayout authenticate>
//                     <Carts />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/my/Dashboard"
//                 element={
//                   <AuthLayout authenticate>
//                     <Dashboard />
//                   </AuthLayout>
//                 }
//               />
//               <Route
//                 path="/my/order/invoice"
//                 element={
//                   <AuthLayout authenticate>
//                     <InvoiceComponent />
//                   </AuthLayout>
//                 }
//               />
//               <Route path="/view-order/:orderId" element={
//                 <ViewOrderComponent/>
//                 } />

// <Route
//   path="/shops/:category/:subcategory/:subsubcategory/:slugg"
//   element={
//     <AuthLayout authenticate>
//       <Product />
//     </AuthLayout>
//   }
// />
// <Route
//   path="/shops/:category/:subcategory/:slugg([a-zA-Z0-9-]+)"
//   element={
//     <AuthLayout authenticate>
//       <Product />
//     </AuthLayout>
//   }
// />
// <Route
//   path="/shops/:category/:slugg([a-zA-Z0-9-]+)"
//   element={
//     <AuthLayout authenticate>
//       <Product />
//     </AuthLayout>
//   }
// />
//               <Route
//                 path="/shop/:tag/:slugs"
//                 element={
//                   <AuthLayout authenticate>
//                   <Product />
//                   </AuthLayout>
//                 }
//               />
//               <Route path="/*" element={<Layout />}>
//                 <Route path="*" element={<App />} /> {/* Default route */}
//               </Route>
//             </Routes>
//           </ErrorBoundary>
//         </Router>
//       </Provider>
//     </PersistGate>
//   // </React.StrictMode>
// );

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



import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./Component/ErrorBoundary.jsx";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Rtk/Store/store.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./Pages/Admin.jsx";
import Layout from "./Component/Layout/Layout.jsx";
import Sign_up from "./Pages/Sign_up.jsx";
import LoginC from "./Pages/CLogin.jsx";
import AuthLayout from "./Component/AuthLayout.jsx";
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
import AdminLayout from "./Component/Admin/AdminLayout.jsx";
import AdminApp from "./Component/Admin/AdminApp.jsx";
import ProductForm from "./form/ProductForm.jsx";
import ManageProducts from "./Component/Admin/ManageProduct.jsx";
import ManageOrder from "./Component/Admin/ManageOrder.jsx";
import { ProductProvider } from './Component/Admin/ProductContext';
import About from "./Component/AboutUSPage/About.jsx";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <Routes>

          <Route path="/admin" element={<AdminLayout />}>
          
          {/* <Route index element={<div>Welcome to Admin Dashboard</div>} /> */}
          <Route path="add-product" element={<ProductForm />} />
          <Route path="manage-product" element={<ProductProvider>
      <ManageProducts />
    </ProductProvider>} />
          <Route path="manage-order" element={<ManageOrder />} />
        </Route>
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
            <Route path="/view-order/:orderId" element={<ViewOrderComponent />} />

            Specific Product Detail Routes
            <Route
              path="/shops/:category/:subcategory/:subsubcategory/:slugg"
              element={
                <AuthLayout authenticate>
                  <Product />
                </AuthLayout>
              }
            />
            <Route
              path="/about"
              element={
                <AuthLayout authenticate>
                  <About  />
                </AuthLayout>
              }
            />

            {/* Default Layout and App Route */}
            <Route path="/*" element={<Layout />}>
              <Route path="*" element={<App />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Router>
    </Provider>
  </PersistGate>
);
