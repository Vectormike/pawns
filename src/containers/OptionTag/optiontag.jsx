import React, { useState, useEffect } from "react";
import { async } from "q";

export function Option() {
  const [breeds, addBreed] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const breeds = await response.json();
      addBreed(breeds.message);
    };

    fetchFunc();
  }, []);

  return (
    <div>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
