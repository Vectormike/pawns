import React, { useState } from "react";
import { Option } from "../OptionTag/optiontag";
import List from "../DogImageList/dogimagelist";

function Gallery() {
  
  return (
    <div className="container">
      <Option />
      <List />
    </div>
  );
}

export default Gallery;
