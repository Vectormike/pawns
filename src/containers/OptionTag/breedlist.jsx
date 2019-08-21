import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./breedlist.css";

export function Option() {
  const [breeds, addBreed] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const results = await response.json();
      addBreed(results.message);
    };

    fetchFunc();
  }, []);

  console.log(breeds);
  const items = [];
  for (const prop in breeds) {
    console.log(`${prop}`);
    items.push(
      <li>
        <Link>{prop}</Link>
      </li>
    );
  }
  
  return (
    <div className="wrapper">
      <h2>Breeds</h2>
      <aside className="sidebar-left">
        <ul>{items}</ul>
      </aside>
    </div>
  );
}
