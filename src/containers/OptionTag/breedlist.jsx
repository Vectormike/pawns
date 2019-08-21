import React from "react";
import "./breedlist.css";

export function Option({items}) {

  return (
    <div className="wrapper">
      <h2>Breeds</h2>
      <aside className="sidebar-left">
        <ul>{items}</ul>
      </aside>
    </div>
  );
}
