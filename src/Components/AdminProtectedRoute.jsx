// src/Components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
    let parseAdminData = JSON.parse(localStorage.getItem("adminlogin"));

    if (!parseAdminData) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AdminProtectedRoute;
