import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('loginuser'));
    let parseAdminData = JSON.parse(localStorage.getItem("adminlogin"));

    if (user || parseAdminData) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PublicRoute;
