import React, { Component } from "react";
import { Option } from "../OptionTag/optiontag";
import List from "../DogImageList/dogimagelist";

class Breed extends Component {
  render() {
    return (
      <div className="container">
        <Option />
        <List />
      </div>
    );
  }
}

export default Breed;
