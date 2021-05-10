import React from "react";
import "./home.css";
import testImg from "../assets/test.png";
import hero from "../assets/hero_asset.jpg";

const Home = () => {
  return (
    <div>
      <div className="index-wrap">
        <div className="index-manifesto">
          I am a creative designer and full stack developer in{" "}
          <span class="accent-text">User Experience </span>
          content creation, <span class="accent-text">
            Immersive 3D/VR
          </span>{" "}
          interactive strategy and{" "}
          <span class="accent-text">Web Development</span>.
        </div>
        <div className="filter">
          <ul>
            <li>All</li>
            <li>USER EXPERIENCE</li>
            <li>3D/VR</li>
            <li>WEB DEVELOPMENT</li>
          </ul>
        </div>
        <div className="container">
          <img alt="img" src={hero} className="thumb" />
          <div>Project Title 1</div>
        </div>
        <div className="container">
          <div className="thumb-left">
            <img alt="img" src={testImg} className="thumb" />
            <div>Project Title 1</div>
          </div>

          <div className="thumb-right">
            <img alt="img" src={testImg} className="thumb" />
            <div>Project Title 2</div>
          </div>
        </div>
        <div className="container">
          <div className="thumb-left">
            <img alt="img" src={testImg} className="thumb" />
            <div>Project Title 1</div>
          </div>

          <div className="thumb-right">
            <img alt="img" src={testImg} className="thumb" />
            <div>Project Title 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
