// ImageUploadForm.js
import React, { useState } from "react";

const ImageUpload = function ({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
      setPreviewUrl(URL.createObjectURL(files[0]));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Place Photo Was Taken"
          />

          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe The Place Photo Was Taken"
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
        {previewUrl && (
          <img src={previewUrl} alt="Preview" style={{ width: "200px" }} />
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageUpload;
