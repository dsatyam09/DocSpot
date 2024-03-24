"use client";

import { useState } from "react";
import { searching } from "@/lib/actions";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    await searching(searchValue);
  };
  return (
    <div className="flex items-center justify-center p-4 bg-gray-300 rounded-full" style={{ width: '95vw' }}>
      <div className="w-full max-w-screen-xl text-white">
        <div className="flex items-center justify-between mx-auto h-full px-4">
          <div className="flex items-center">
          <img
              src="https://res.cloudinary.com/duws62b88/image/upload/v1711273075/logo_itrsjo.svg"
              alt="logo"
              className="w-12 h-12 object-cover rounded-full cursor-pointer mt-1"
            />
            <div class="text-gray-900">
  <p class="text-2xl font-bold px-3" >DocSpot</p>
</div>
            </div>
            
          <div className="flex items-center">
            {/* Text field for search */}
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="mr-2 px-2 py-1 rounded border border-gray-400 text-grey-200" style={{ width: '45vw' }}
            />
            {/* Button to trigger search */}
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Search
            </button>
            <div className="bg-blue-500 mx-5 text-white px-3 py-1 rounded">
            <div>Login</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
