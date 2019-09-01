import React from "react";
import DogImage from "../DogImage/dogimage";

export default function DogImageList({ image }) {
  return (
    <div>
      {image.map((res, i) => (
        <DogImage key={i} url={res} />
      ))}
    </div>
  );
}
