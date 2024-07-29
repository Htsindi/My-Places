import React from "react";

function ImageDisplay({ data }) {
  return (
    <div>
      <h2>My Favourite Places:</h2>
      <p>Name: {data.name}</p>
      <p>Description: {data.description}</p>

      {data.image && (
        <div>
          <p>Image:</p>
          <img
            src={URL.createObjectURL(data.image)}
            alt="Submitted"
            style={{ width: "200px" }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageDisplay;
