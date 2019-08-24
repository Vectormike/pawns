import React from "react";
import "./menu.css";

export function Menu({ items }) {
  return (
    <div class="container">
      <span class="choose">Choose Breed</span>
      <div class="dropdown">
        <div class="select">
          <span>Select Breed</span>
          <i class="fa fa-chevron-left" />
        </div>
        <input type="hidden" name="gender" />
        <ul class="dropdown-menu">{items}</ul>
      </div>
    </div>
  );
}
