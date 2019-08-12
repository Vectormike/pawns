import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Index extends Component {
  constructor() {
    super();
    this.state = {
      image: ""
    };
  }

  componentDidMount() {
    const getImageUrl = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const image = await response.json();
        console.log(image);
      } catch (error) {
        console.log(` Error b2=> ${error}`);
      }
    };
  }

  render() {
    return (
      <div>
        <div>
          <p>Hi</p>
          <nav className="navbar fixed-bottom navbar-light bg-light">
            <Link className="navbar-brand" href="to">
              <button type="button" className="btn btn-primary">View</button>
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default Index;
