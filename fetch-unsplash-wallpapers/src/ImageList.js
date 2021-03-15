import React from "react";
import "./App.css";

const ImageList = ({ images }) => {
  console.log(images);
  if (images.length > 0) {
    return (
      <div className="images">
        {images.map((element, idx) => {
          return (
            <img
              key={idx}
              src={element.urls.small}
              alt="..."
              style={{ maxHeight: "180px" }}
            ></img>
          );
        })}
      </div>
    );
  }
  return <div>Not Image to show</div>;
};

export default ImageList;
