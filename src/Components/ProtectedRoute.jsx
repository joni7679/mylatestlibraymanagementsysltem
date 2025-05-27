// src/Components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const storeUser = JSON.parse(localStorage.getItem("loginuser"));

    if (!storeUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
