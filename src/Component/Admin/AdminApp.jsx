import React from "react";
import { Outlet } from "react-router-dom";
import ProductForm from "../../form/ProductForm";

const AdminApp = () => (
  <div>
    <h1>Welcome to the Admin App</h1>
    {/* ProductForm would be rendered based on the nested route */}
    <Outlet />
  </div>
);

export default AdminApp;
