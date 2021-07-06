import React from "react";
import { Link } from "react-router-dom";
import "./vr.css";
import HeaderImage from "../assets/360_DC_777_LNG.jpg";
import globe from "../assets/globe.svg";

const VR_DC = () => {

  return (
    
    <div>
      <div className="vr-wrap">

        <Link to="/vr-dc-360">
          <img alt="head" src={HeaderImage} className="vr-header" />
          <img alt="360" src={globe} className="globe-head" />
        </Link>

      </div>

      <div className="project-detail-wrap">

        <div className="container">

          <div className="project-name">WeWork KDX</div>

          {/* project info */}
          <div className="project-credit">
            
            <div>Design Director: Ash Every</div>
            <div>Interior Design Lead: Daiki Nakazawa</div>
            <div>Arts & Graphics Lead: Kyle Stecker & Asuka Watanabe</div>
            <div>Visualization Lead: Victoria Lee, & Sheena Garcia</div>
            <div>Software: Autodesk 3DsMax, V-Ray Render Engine, Corona Render Engine, Photoshop, ThreeJS, JavaScript, React, HTML, CSS</div>
          
          </div>

          {/* description */}
          <div className="project-detail">

            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VR_DC;
