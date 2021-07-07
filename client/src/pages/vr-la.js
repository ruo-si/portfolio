import React from "react";
import { Link } from "react-router-dom";
import "./vr.css";
import HeaderImage from "../assets/360_LA_PACIFIC_LNG.jpg";
import globe from "../assets/globe.svg";

const VR_LA = () => {
  
  return (
    
    <div>

      <div className="vr-wrap">

        <Link to="/vr-la-360">
          <img alt="head" src={HeaderImage} className="vr-header" />
          <img alt="360" src={globe} className="globe-head" />
        </Link>

      </div>

      <div className="project-detail-wrap">

        <div className="container">

          <div className="project-name">WeWork 
          <br/>
          Pacific Center, LA
          </div>

          {/* project info */}
          <div className="project-credit">
            
            <div>Design Director: Ash Every</div>
            <div>Visualization Lead: Victoria Lee & Sheena Garcia</div>
            <div>Interior Design Lead: Daiki Nakazawa</div>
            <div>Arts & Graphics Lead: Kyle Stecker & Asuka Watanabe</div>
            <div>Software: Autodesk 3DsMax, V-Ray Render Engine, Corona Render Engine, Photoshop, ThreeJS, JavaScript, React, HTML, CSS</div>

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

export default VR_LA;
