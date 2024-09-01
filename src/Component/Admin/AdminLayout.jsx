import React from "react";
import {Outlet} from "react-router-dom";
import { Sidebar } from "./Admin";
import { Navbar } from "./Admin";

export const AdminLayout = () => {
    return (
        <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        
        <Outlet />
      </div>
    </div>
    );
};


export default AdminLayout;
