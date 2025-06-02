import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchIngBooks } from "../Reducx/BooksSlice";

const SelectOption = ({ selected, setselected }) => {
    return (
        <div className="w-full max-w-sm mx-auto mt-10">
            <label htmlFor="options" className="block text-sm font-medium text-gray-700 mb-2">
                Choose an option
            </label>
            <select
                id="options"
                value={selected}
               
                className="block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">-- Select --</option>
                <option value="react">React</option>
                <option value="tailwind">Tailwind CSS</option>
                <option value="gsap">GSAP</option>
                <option value="aos">AOS</option>
            </select>

            {selected && (
                <p className="mt-4 text-green-600 font-medium">
                    You selected: {selected}
                </p>
            )}
        </div>
    );
};

export default SelectOption;
