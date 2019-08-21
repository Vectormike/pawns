import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./indexPage.css";

class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      image: ""
    };
  }

  getImageUrl = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const image = await response.json();
      this.setState({ image: image.message });
      console.log(this.state.image);
    } catch (error) {
      console.log(` Error fetching`);
    }
  };

  componentDidMount() {
    this.getImageUrl();
  }

  render() {
    return (
      <div
        //style={{background: `url(${this.state.image})`}}
        id="bg"
        className="index"
      >
        <nav className="navbar">
          <a className="navbar-brand" href="to">
            <i className="fas fa-dog" />
          </a>
        </nav>
        <nav className="navbar fixed-bottom">
          <Link to="/gallery">
            <button className="btn first">View Gallery</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default IndexPage;
