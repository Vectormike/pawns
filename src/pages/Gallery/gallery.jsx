import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu/menu";
import DogImageList from "../../components/DogImageList/dogimagelist";

function Gallery() {
  const [breeds, setBreed] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const results = await response.json();
      setBreed(results.message);
    };

    fetchFunc();
  }, []);

  let onhandleClick = (e) => {
    console.log(e.target.ref);
    fetchImages();
  };

  // useEffect(() => {
  //   fetchImages(image);
  // }, []);

  const fetchImages = async item => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${item}/images/random/3`
      );
      const results = await response.json();
      setImage(results.message);
      console.log(results.message);
    } catch (error) {
      console.error(error)
    }
  };

  const items = [];
  for (const prop in breeds) {
    items.push(
      <li key={prop} onClick={onhandleClick}>
       {prop}
      </li>
    );
  }

  return (
    <div className="container">
      <Menu items={items} />
      <DogImageList image={image}/>
    </div>
  );
}

export default Gallery;
