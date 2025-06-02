import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function PasswordPopUp({ isOpen, onSuccess, onClose }) {
    const admin = JSON.parse(localStorage.getItem("adminlogin"));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill all fields");
            return;
        }

        if (email === admin.email && password === admin.password) {
            toast.success("Admin Data Correct.....");
            onSuccess();
            onClose();
        } else {
            toast.error("this admin data is incorrect. so! Update Cancelled.");
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <ToastContainer position="top-center" autoClose={2000} />
            <div className="  modal bg-white p-6 rounded shadow-lg w-[30rem] absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-[60%] duration-300 transition-transform ease-in-out">
                <h2 className="text-xl font-bold mb-4">Enter Admin Credentials......</h2>

                <input
                    type="email"
                    placeholder="Enter admin email"
                    className="border p-2 w-full mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    className="border p-2 w-full mb-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="flex justify-end space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={handleSubmit}>
                        Confirm
                    </button>
                    <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-pointer" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
}

export default PasswordPopUp;
