import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ProfileSettings = () => {

    return (
        <>
            <div className="min-h-screen w-full text-white p-8 bg-[#0f0f1a]">
                <form autoComplete="off" >
                    <div className="max-w-4xl mx-auto">

                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-semibold">Joni Halder</h1>
                            <button
                                type="submit"
                                className="cursor-pointer bg-[#2e2e4a] hover:bg-[#3a3a5c] text-white px-4 py-2 rounded-md border border-[#4f4f6f]"
                            >
                                Save
                            </button>
                        </div>


                        <div className="bg-[#1a1a2e] p-6 rounded-md shadow-md mb-6">
                            <h2 className="text-xl font-semibold mb-4">Profile settings</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <InputField
                                    label="Your Name"
                                    name="name"


                                />
                                <InputField
                                    label="Email"
                                    name="email"


                                />
                                <InputField
                                    label="Username"
                                    name="username"

                                />
                            </div>
                        </div>


                        <div className="bg-[#1a1a2e] p-6 rounded-md shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InputField
                                    label="Current Password"
                                    name="currentPassword"
                                    type="password"

                                />
                                <InputField
                                    label="New Password"
                                    name="newPassword"
                                    type="password"

                                />
                                <InputField
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    type="password"

                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};


const InputField = ({ label, name, type = "text", value, onChange }) => (
    <div>
        <label className="block mb-1">
            {label}
            {<span className="text-red-500 mr-[-20px]"><FaStar className="inline-block  text-[12px]" />
            </span>}
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

export default ProfileSettings;
