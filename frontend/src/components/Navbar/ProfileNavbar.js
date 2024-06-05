"use client";
import { useState } from "react";
import { searching } from "@/lib/actions";

const ProfileNavbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(null);  // State to store search results

  const handleSearch = async () => {
    const response = await searching(searchValue);
    setSearchResults(response); // Update search results state
  };

  const handleSearchResultClick = async (id) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/try", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }
      const blob = await response.blob();

      // Create a URL for the blob
      const url = URL.createObjectURL(blob);

      // Open the PDF in a new tab
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  const searchBarStyles = {
    padding: '10px',
    borderRadius: '20px', // Adjust the border radius to your preference
    border: '1px solid #ccc',
    width: '300px', // Adjust the width to your preference
    outline: 'none',
    width: "45vw"
  };

  const textStle = {
    color: 'white', // Set text color to black
    fontFamily: 'sans-serif', // Set font family to sans-serif
    fontSize: '35px', // Set font size to your preference
    fontWeight: 'bold',
    textAlign: 'center'
  }

  const textStle1 = {
    color: 'white', // Set text color to black
    fontFamily: 'arial', // Set font family to sans-serif
    fontSize: '20px', // Set font size to your preference
    fontWeight: 'bold',
    textAlign: 'center'
  }
  return (
    <div
      className="flex flex-col items-center justify-center rounded-full"
      style={{ width: "95vw" }}
    >
     
      <div className="w-full max-w-screen-xl text-white">
        <div className="flex flex-col items-center justify-between mx-auto h-full px-4">
        

          <div className="flex items-center mt-4">
            {" "}
            {/* Added mt-4 for spacing */}
            {/* Text field for search */}
           
            <input
              type="text"
              style={searchBarStyles}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="mr-2 px-5 rounded-md border bg-gray-600 text-grey-300"
            />
            <span>
            <button onClick={handleSearch} className="px-3 py-3 rounded-full border bg-gray-600 text-grey-300">
              <img src="https://www.svgrepo.com/show/532552/search-alt-2.svg" alt="Search Icon" className="w-4 h-4" />
            </button>
            </span>
             

            {/* Button to trigger search */}
            {/* <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Search
            </button> */}
            {/* <div className="bg-blue-500 mx-5 text-white px-3 py-1 rounded">
              <div>Login</div>
            </div> */}
          </div>
        </div>
      </div>
      {searchResults && ( // Render search results if available
        <div className="mt-4">
          {" "}
          {/* Added mt-4 for spacing */}
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} onClick={() => handleSearchResultClick(result)}>
                {result}
                <span />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileNavbar;
