import React from "react";
import { Link } from "react-router-dom";
import "./vr.css";
import HeaderImage from "../assets/360/360_KR_SEO_LNG.jpg";
import globe from "../assets/globe.svg";

const VR_SEOUL = () => {

  return (

    <div>

      <div className="vr-wrap">

        <Link to="/vr-seoul-360">
          <img alt="head" src={HeaderImage} className="vr-header" />
          <img alt="360" src={globe} className="globe-head" />
        </Link>

      </div>

      <div className="project-detail-wrap">

        <div className="container">

          <div className="project-name">WeWork
            <br />
            Seoul, Korea
          </div>

          {/* project info */}
          <div className="project-credit">

            <div>Visualization Lead: Victoria Lee & Sheena Garcia</div>
            <div>Interior Design Lead: Christina Jih & Hayden Shin</div>
            <div>Arts & Graphics Lead: Kristal Raelene Melson</div>
            <div>Local Art consultant: D'AMUSEMentS</div>
            <div>Software: Autodesk 3DsMax, V-Ray Render Engine, Corona Render Engine, Photoshop, ThreeJS, JavaScript, React, HTML, CSS</div>

          </div>

          {/* description */}
          <div className="project-detail">

            <div>
              Contribution:
              This is the vr experience developed for the WeWork Jongno Tower, Seoul Korea location.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VR_SEOUL;
