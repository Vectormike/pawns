import React, { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {
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
    } catch (error) {
      console.log(` Error b2=> ${error}`);
    }
  };

  componentDidMount() {
    this.getImageUrl();
  }

  render() {
    return (
      <div>
        <div
          style={{ backgroundImage: `url(${this.state.image})` }}
        >
          <nav className="navbar fixed-bottom navbar-light">
            <Link className="navbar-brand" to="to">
              <button type="button" className="btn btn-primary">
                View
              </button>
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default Index;
