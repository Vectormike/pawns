import React, { useState, useEffect } from "react";

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
    items.push(<li>{prop}</li>);
  }
  return (
    <article>
      <section>{items}</section>
    </article>
  );
}
