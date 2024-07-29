// App.js
import React, { useState } from "react";
import ImageDisplay from "./Components/ImageDisplay";
import ImageUpload from "./Components/ImageUpload";

function App() {
  const [submittedDataList, setSubmittedDataList] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedDataList((prevList) => [...prevList, data].slice(0, 3)); // setSubmittedData([...submittedData, data);
  };

  return (
    <div className="App">
      <h1>Upload Picture Form</h1>
      <ImageUpload onSubmit={handleFormSubmit} />
      {submittedDataList.map((data, index) => (
        <ImageDisplay key={index} data={data} />
      ))}
    </div>
  );
}

export default App;
