import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu/menu";
import DogImageList from "../../components/DogImageList/dogimagelist";

function Gallery() {
  const [breeds, addBreed] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const results = await response.json();
      addBreed(results.message);
    };

    fetchFunc();
  }, []);

  let onClick = e => {
    console.log("Fuckyou");
  };

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
