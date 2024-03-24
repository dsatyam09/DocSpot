import { useState } from "react";
import { searching } from "@/lib/actions";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(null); // State to store search results

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

  return (
    <div
      className="flex flex-col items-center justify-center p-4 bg-gray-300 rounded-full"
      style={{ width: "95vw" }}
    >
      <div className="w-full max-w-screen-xl text-white">
        <div className="flex flex-col items-center justify-between mx-auto h-full px-4">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/duws62b88/image/upload/v1711273075/logo_itrsjo.svg"
              alt="logo"
              className="w-12 h-12 object-cover rounded-full cursor-pointer mt-1"
            />
            <div class="text-gray-900">
              <p class="text-2xl font-bold px-3">DocSpot</p>
            </div>
          </div>

          <div className="flex items-center mt-4">
            {" "}
            {/* Added mt-4 for spacing */}
            {/* Text field for search */}
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="mr-2 px-2 py-1 rounded-md border border-gray-400 bg-gray-600 text-grey-300"
              style={{ width: "45vw" }}
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

export default Navbar;
