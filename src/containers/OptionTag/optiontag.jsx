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

  let value = breeds.map((breed, i) => {
    return (
      <div>
        <select>
          <option key={i}>{breed.bulldog}</option>
        </select>
      </div>
    );
  });
  return { value };
}
