"use client";

import Navbar from "@/components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import FileForm from "@/components/FileForm/FileForm";
import HeroSection from "@/components/HeroSection/HeroSection";
import WavyBackground from "@/components/WavyBackground/WavyBackground";
import { searching } from "@/lib/actions";

const Home = () => {
  const [searchResponse, setSearchResponse] = useState([]);

  useEffect(() => {
    // Define a function to fetch search results when the component mounts
    const fetchData = async () => {
      try {
        // Call the handleSearch function and store the response in state
        const response = await handleSearch();
        setSearchResponse(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <div className="bg-black w-full">
      
      <div className="w-full flex flex-col items-center justify-center py-8 bg-black-100">
        <Navbar />
      </div>

      <div>
      <div className="w-full flex flex-col items-center justify-center py-8 bg-black-100">
      <FileForm />
      </div>

      
       {/* <HeroSection />  */}
       <WavyBackground />
</div>

    </div>
  );
};

export default Home;
