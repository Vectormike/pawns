import React from "react";
import "./menu.css";

export function Menu({ items }) {
  return (
    <div>
      <nav>
        <div className="dropdown hover">
          <a href="#">Hover Menu</a>
          <ul>{items}</ul>
        </div>
      </nav>
    </div>
  );
}
