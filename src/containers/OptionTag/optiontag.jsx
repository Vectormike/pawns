import React, { useState, useEffect } from "react";

export function Option() {
  let [breeds, addBreed] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const results = await response.json();
      addBreed(results.message);
    };

    fetchFunc();
  }, []);
  breeds = Array.of(breeds);
  console.log(breeds);

  return (
    <div>
      <select>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
}
