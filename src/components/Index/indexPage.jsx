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
    } catch (error) {
      console.log(` Error fetching`);
    }
  };

  componentDidMount() {
    this.getImageUrl();
  }

  render() {
    return (
      // <div
      //   className="index"
      //   style={{ backgroundImage: `url(${this.state.image})` }}
      // >
      //   <nav className="navbar">
      //     <a className="navbar-brand" href="to">
      //       <i className="fas fa-dog" />
      //     </a>
      //   </nav>
      //   <nav className="navbar button fixed-bottom">
      //     <button className="btn first">View Gallery</button>
      //   </nav>
      // </div>
      <div>
        <header>
          <a href="to" id="logo">
            <i className="fas fa-dog" />
          </a>
        </header>
        <section
          style={{ backgroundImage: `url(${this.state.image})` }}
          id="hero1"
          className="hero"
        >
          <div className="inner">
            <div className="copy">
              <h1>Choice mountains bro</h1>
              <p>
                Its like im actually there! But sitting at a computer. Wow, the
                future is intense!
              </p>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="inner">
            <div className="copy">
              <h1>Amazing copy!</h1>
              <p>The words are like jumping out at me man! </p>
            </div>
          </div>
        </section>
        <section id="hero2" className="hero">
          <div className="inner">
            <div className="copy">
              <h1>Dem some big ass caves</h1>
              <p>You could probably fit in there ;)</p>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="inner">
            <div className="copy">
              <h1>An inspiring quote</h1>
              <p>/-- file not found --/</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default IndexPage;
