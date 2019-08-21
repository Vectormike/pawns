import React, { useState, useEffect } from "react";

export function Option() {
  const [breeds, addBreed] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const results = await response.json();
      addBreed(Array.of(results.message));
    };

    fetchFunc();
  }, []);

  console.log(breeds);

  return (
    <article>
      <section>
        {breeds.map((breed, i) => (
          <ul key={i} value={breed}>
            <li key={i}>{breed}</li>
          </ul>
        ))}
      </section>
    </article>
  );
}
