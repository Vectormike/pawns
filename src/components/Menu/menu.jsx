import React from "react";
import "./menu.css";

export function Menu({ items }) {
  return (
    <div>
      <section>
        <ul>{items}</ul>
      </section>
    </div>
  );
}
