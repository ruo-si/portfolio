import React from "react";
import "./home.css";
import testImg from "../assets/test.png";

const Home = () => {

  return (
    <div>
      <div className="index-wrap">
        <div>
          Hi! I am Victoria, I am a creative designer and full stack developer in 2D visual
          imagery, 3D/VR/AR interactive content strategy and front-end development.
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
            <div>Project Title 3</div>
          </div>
          <div className="thumb-right">
            <img alt="img" src={testImg} className="thumb" />
            <div>Project Title 4</div>
          </div>


        </div>
      </div>
    </div>

  )
}

export default Home;
