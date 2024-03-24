"use server";

import { signIn } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";

export const searching = async (searchValue) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/search", {
      method: "POST",
      body: searchValue,
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json(); // Assuming the server responds with JSON
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error; // Re-throw the error to propagate it further if needed
  }
};

export const addFile = async (formData) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/analyzeReports", {
      method: "POST",
      body: formData,
      // Note: Fetch will automatically set the Content-Type to multipart/form-data here
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json(); // Assuming the server responds with JSON
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error; // Re-throw the error to propagate it further if needed
  }
};

export const handleGoogleLogin = async () => {
  "use server";
  await signIn("google");
};

export const handleGoogleLogout = async () => {
  "use server";
  await signOut();
};
