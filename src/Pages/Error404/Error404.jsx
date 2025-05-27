import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Error404 = () => {
    return (
        <>
        <Navbar/>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
                    <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-800">We are Sorry...</h2>
                    <p className="text-gray-600 mt-4 mb-6">
                        The page you’re trying to access has restricted access. <br />
                        Please refer to your system administrator.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition duration-200"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </>

    );
};

export default Error404;
