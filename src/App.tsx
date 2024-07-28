// App.js
import React, { useState } from "react";
import ImageUpload from "./Components/ImageUpload";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="App">
      <h1>Upload Picture Form</h1>
      <ImageUpload onSubmit={handleFormSubmit} />
      {submittedData && (
        <div>
          <h2>Submitted Information:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Description: {submittedData.description}</p>
          <img
            src={submittedData.imageUrl}
            alt="Uploaded"
            style={{ maxWidth: "300px", marginTop: "20px" }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
