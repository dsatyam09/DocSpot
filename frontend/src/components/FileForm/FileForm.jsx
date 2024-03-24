"use client";
import { useState } from "react";
import { addFile } from "@/lib/actions";

const FileForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      await addFile(formData);
      console.log("Success");
    } catch (err) {
      console.log(err);
    }
    // const res = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: formData
    // });
    // const data = await res.json();
    // console.log(data);
  };

  return (
    <div className="bg-black-100 text-white">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FileForm;
