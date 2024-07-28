// ImageUploadForm.js
import React, { useState } from "react";

function ImageUpload({ onSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      onSubmit({ name, description, imageUrl });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name of Place:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Enter Place Photo Was Taken"
        />
         <label htmlFor="description">Describe Place:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          required
          placeholder="Describe The Place Photo Was Taken"
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={handleFileChange}
          accept="image/*"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ImageUpload;
