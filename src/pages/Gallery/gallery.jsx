import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu/menu";
import DogImageList from "../../components/DogImageList/dogimagelist";

function Gallery() {
  const [breeds, setBreed] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const results = await response.json();
      setBreed(results.message);
    };

    fetchFunc();
  }, []);

  let onClick = e => {
    console.log("Fuckyou");
    this.fetchFunc(breed);
  };

  useEffect(() => {
    const fetchImages = async breed => {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/3`
      );
      const results = await response.json();
      setImages(results.message);
    };

    fetchImages(breed);
  }, [images]);

  const items = [];
  for (const prop in breeds) {
    items.push(
      <li>
        <Link to="/breed" onClick={onClick}>
          {prop}
        </Link>
      </li>
    );
  }

  return (
    <div className="container">
      <Menu items={items} />
      <DogImageList />
    </div>
  );
}

export default Gallery;
