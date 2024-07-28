import React from 'react';

function ImageDisplay({ imageUrl }) {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default ImageDisplay;