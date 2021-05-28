import React from "react";
import "./vr.css";
import HeaderImage from "../assets/CHI_WAB_360_LNG 1.jpg";
const Vr1 = () => {
  return (
    <div>
      <div>
        <img alt="head" src={HeaderImage} className="vr-header" />
      </div>
      <div className="project-detail-wrap">
        <div className="container">
          <div className="project-name">WeWork KDX</div>
          <div className="project-credit">
            <div>Design Director: Ash Every</div>
            <div>Interior Design Lead: Daiki Nakazawa</div>
            <div>Arts & Graphics Lead: Kyle Stecker & Asuka Watanabe</div>
            <div>Visualization Lead: Victoria Lee, & Sheena Garcia</div>
          </div>
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

export default Vr1;
