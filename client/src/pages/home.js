import React, { Component } from "react";
import "./home.css";
import testImg from "../assets/test.png";

class home extends Component {
  render() {
    return (
      <div>
        <div className="index-wrap">
          <div>
            I am a creative designer and full stack developer in 2D visual
            imagery, 3D/VR interactive content strategy and web development.
          </div>

          <div className="container">
            <img alt="img" src={testImg} className="thumb-left" />

          </div>

          <div className="container">
            <img alt="img" src={testImg} className="thumb-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default home;
