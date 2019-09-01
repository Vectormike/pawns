import React from "react";
import DogImage from "../DogImage/dogimage";
import "./dogimagelist.css";

export default function DogImageList({ image }) {
  return (
    <div className="gallery">
      {image.map((res, i) => (
        <DogImage key={i} url={res} />
      ))}
    </div>
  );
}
