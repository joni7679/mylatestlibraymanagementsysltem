import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addusers, fetchUserData } from "../../Reducx/UserSlice";
import { addAdmin } from "../../Reducx/AdminSlice";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

function AddStudents() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [formData, setformData] = useState({
        id: nanoid(),
        name: "",
        email: "",
        number: "",
        password: "",
        confirmPassword: "",
        role: "select-role",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, number, password, confirmPassword, role } = formData;

        if (
            !name ||
            !email ||
            !number ||
            !password ||
            !confirmPassword ||
            role === "select-role"
        ) {
            toast.error("Please fill in all fields");
            return;
        }

        if (name.length < 3) {
            toast.error("Name must be at least 3 characters long");
            return;
        }

        if (number.length <= 10 ) {
            toast.error("Number must be at least 10 digits long");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Invalid email format");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Password and confirm password do not match");
            return;
        }
        toast.success("Form submitted successfully");
        console.log("User Data:", formData);
        if (formData.role === "admin") {
            console.log("Admin Data:", formData);
            try {
                const response = axios.post(`http://localhost:3000/admin`, formData);
                console.log(response.data);
                dispatch(response.data)
                setformData = {
                    name: "",
                    email: "",
                    number: "",
                    password: "",
                    confirmPassword: "",
                    role: "",
                }
            } catch (error) {
                console.log("error peroblem plz try again leater...");
            }
        }
        else {
            console.log("User Data:", formData);
            try {
                const res = axios.post('http://localhost:3000/users', formData);
                console.log(res.data);
                dispatch(addusers(res.data));
                setformData = {
                    name: "",
                    email: "",
                    number: "",
                    password: "",
                    confirmPassword: "",
                    registrationDate: new Date().toISOString(),
                    role: "",
                }
            } catch (error) {
                toast.error("Something went wrong during signup.");
                console.error(error);
            }

        }

    };

    return (
        <>
            <ToastContainer />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
                    <h2 className="text-xl font-bold mb-4">Add Data</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="number" className="block">
                                Number
                            </label>
                            <input
                                type="text"
                                id="number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2"
                            />
                        </div>

                        <div>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 w-full mt-2"
                            >
                                <option value="select-role">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="py-[15px] px-[25px] bg-blue-500 text-white capitalize rounded-2xl cursor-pointer">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddStudents;
