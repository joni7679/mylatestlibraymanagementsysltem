import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { editUser } from '../../Reducx/UserSlice';

function UserActions() {
    let { error, isLoading, currentUser, isLogined } = useSelector((state) => state.user);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { id } = useParams();
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({});
    console.log("Your edit user id is", id);

    // Fetch existing user data
    const getEditUserData = async () => {
        if (id) {
            try {
                const res = await axios.get(`http://localhost:3000/users/${id}`);
                setUser(res.data);
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        }

    };

    // Update user data
    const updateData = async (e) => {
        e.preventDefault();
        if (!user.name || !user.email || !user.username || !user.password || !user.newPassword || !user.confirmPassword) {
            alert("Please fill in all fields");
            return;
        }
        if (user.newPassword !== user.confirmPassword) {
            alert("New password and confirm password do not match");
            return;
        }
        if (user.password === user.newPassword) {
            alert("New password cannot be the same as the current password");
            return;
        }
        if (user.password.length < 6 || user.newPassword.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        else {
            toast.success("User updated successfully")
            setTimeout(() => {
                navigate(`/admin`)
            }, 1000);
        }

        try {
            const res = await axios.patch(`http://localhost:3000/users/${id}`, user);
            dispatch(editUser(res.data));
            setUser(res.data);
            console.log("Updated data:", res);
        } catch (error) {
            console.log("Updating problem:", error);
        }
    };

    useEffect(() => {
        getEditUserData();
    }, [id]);

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen w-full text-white p-8 bg-[#0f0f1a]">
                <form autoComplete="off" >
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-semibold">Edit Profile</h1>
                            <button
                                type="submit"
                                className="cursor-pointer bg-[#2e2e4a] hover:bg-[#3a3a5c] text-white px-4 py-2 rounded-md border border-[#4f4f6f]"
                            >
                                Save
                            </button>
                        </div>

                        <div className="bg-[#1a1a2e] p-6 rounded-md shadow-md mb-6">
                            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InputField
                                    label="User Name"
                                    name="name"
                                    value={user.name || ""}
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                />
                                <InputField
                                    label="Email"
                                    name="email"
                                    value={user.email || ""}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                />
                                <InputField
                                    label="Username"
                                    name="username"
                                    value={user.username || ""}
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="bg-[#1a1a2e] p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <PasswordField
                                    label="Current Password"
                                    name="password"
                                    value={user.password || ""}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    show={showPassword}
                                    toggle={() => setShowPassword(!showPassword)}
                                />

                                <PasswordField
                                    label="New Password"
                                    name="newPassword"
                                    value={user.newPassword || ""}
                                    onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
                                    show={showPassword}
                                    toggle={() => setShowPassword(!showPassword)}
                                />

                                <PasswordField
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    value={user.confirmPassword || ""}
                                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                                    show={showPassword}
                                    toggle={() => setShowPassword(!showPassword)}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>

    );
}

const InputField = ({ label, name, type = "text", value, onChange }) => (
    <div className="relative">
        <label className="block mb-1">
            {label}
            <span className="text-red-500 ml-1">
                <FaStar className="inline-block text-[12px]" />
            </span>
        </label>
        <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className="w-full bg-[#0f0f1a] text-white border border-[#333] px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
    </div>
);

const PasswordField = ({ label, name, type = "password", value, onChange, show, toggle }) => (
    <div className="relative">
        <label className="block mb-1">
            {label}
            <span className="text-red-500 ml-1">
                <FaStar className="inline-block text-[12px]" />
            </span>
        </label>
        <input
            name={name}
            type={show ? "text" : "password"}
            value={value}
            onChange={onChange}
            className="w-full bg-[#0f0f1a] text-white border border-[#333] px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <span
            onClick={toggle}
            className="absolute right-3 top-10 cursor-pointer"
        >
            {show ? <FaEye /> : <FaEyeSlash />}
        </span>
    </div>
);

export default UserActions;
