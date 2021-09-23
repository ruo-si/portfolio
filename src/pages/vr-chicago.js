import React from "react";
import { Link } from "react-router-dom";
import "./vr.css";
import HeaderImage from "../assets/360/360_CHI_WAB_LNG.jpg";
import globe from "../assets/globe.svg";

const VR_CHICAGO = () => {

  return (

    <div>
      <div className="vr-wrap">

        <Link to="/vr-chicago-360">
          <img alt="head" src={HeaderImage} className="vr-header" />
          <img alt="360" src={globe} className="globe-head" />
        </Link>

      </div>

      <div className="project-detail-wrap">

        <div className="container">

          <div className="project-name">WeWork
            <br />
            Chicago
          </div>

          {/* project info */}
          <div className="project-credit">

            <div>Visualization Lead: Victoria Lee, & Sheena Garcia</div>
            <div>Interior Design Lead: Kenny Wang</div>
            <div>Arts & Graphics Lead: Teresa Wozniak</div>
            <div>Software: Autodesk 3DsMax, V-Ray Render Engine, Corona Render Engine, Photoshop, ThreeJS, JavaScript, React, HTML, CSS</div>

          </div>

          {/* description */}
          <div className="project-detail">

            <div>

              Contribution:
              <br />
              immersive experience developed for the 330 N Wabash Location in Chicago, Il.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VR_CHICAGO;
