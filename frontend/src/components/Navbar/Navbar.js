"use client";

import { useState } from "react";
import { searching } from "@/lib/actions";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    await searching(searchValue);
  };
  return (
    <div className="w-4/5 flex items-center justify-center h-32 bg-grey-100 rounded-full">
      <div className="w-full max-w-screen-xl text-white">
        <div className="flex items-center justify-between mx-auto h-full px-4">
          <div>A</div>
          <div className="flex items-center">
            {/* Text field for search */}
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="mr-2 px-2 py-1 rounded border border-gray-400 text-grey-100"
            />
            {/* Button to trigger search */}
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Search
            </button>
            <div>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
