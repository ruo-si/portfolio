import React from "react";
import { Link } from "react-router-dom";
import "./vr.css";
import HeaderImage from "../assets/360_VILLA_LNG.jpg";
import globe from "../assets/globe.svg";

const VR_VILLA = () => {

  return (

    <div>

      <div className="vr-wrap">

        <Link to="/vr-villa-360">
          <img alt="head" src={HeaderImage} className="vr-header" />
          <img alt="360" src={globe} className="globe-head" />
        </Link>

      </div>

      <div className="project-detail-wrap">

        <div className="container">

          <div className="project-name">Villa Savoye
            <br />
            Poissy, France
          </div>

          {/* project info */}
          <div className="project-credit">
            
            <div>Creative Director: Kai Liang</div>
            <div>Visualization Lead: Victoria Lee </div>
            <div>Software: Autodesk 3DsMax, V-Ray Render Engine, Photoshop, ThreeJS, JavaScript, React, HTML, CSS</div>
            
          </div>

          {/* description */}
          <div className="project-detail">

            <div>
              Contribution:

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VR_VILLA;
