import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";


export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <div className="w-full max-w-md mx-auto mt-10 px-4">
            <div className="relative">
                <input
                    type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search here..."
                    className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <BiSearch className="absolute left-4 top-3 text-gray-400" />
            </div>
        </div>
    );
}
