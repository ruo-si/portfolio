import React from "react";
import "./pd.css";
import ReactCompareImage from "react-compare-image";

import H_JP_TOK_DAY from "../assets/H_JP_TOK_DAY.jpg";
import H_JP_TOK_NIGHT from "../assets/H_JP_TOK_NIGHT.jpg";
import V_JP_TOK_1 from "../assets/V_JP_TOK_1.jpg";
// import V_JP_TOK_2 from "../assets/V_JP_TOK_2.jpg";
import H1 from "../assets/H_1.jpg";
import H2 from "../assets/H_2.jpg";
import Material from "../assets/material_collage.jpg";

const Project_SHoP= () => {

  return (

    <div className="pd-container">

      <div className="project-detail-wrap">

        {/* title */}
        <div className="project-name">KXL</div>

        {/* project info */}
        <div className="project-credit">
          <div>Design Director: Ash Every</div>
          <div>Interior Design Lead: Daiki Nakazawa</div>
          <div>Arts & Graphics Lead: Kyle Stecker & Asuka Watanabe</div>
          <div>Visualization Lead: Victoria Lee, & Sheena Garcia</div>
        </div>
        
        {/* project description */}
        <div className="project-detail">
          <div>Contribution:</div>
          <div>Art Direction, Visual Experience</div>
          <div>Tool:</div>
          <div>3DsMax, Corona, Forrest Pack, Adobe Suite</div>
          <div>Timeframe:</div>
        </div>

      </div>

      {/* compare image */}
      <div className="head-wrap">

        <ReactCompareImage
          leftImage={H_JP_TOK_DAY}
          rightImage={H_JP_TOK_NIGHT}
          horizontal
        />

        {/* caption */}
        <div className="caption">WeWork Lorem ipsum</div>

      </div>

      <div className="text-img-wrap">

        <img alt="img" src={V_JP_TOK_1} className="image-wrap-left" />

        <div className="text-wrap-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
      </div>

      <div className="text-img-wrap">
        <div className="text-wrap-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
        <img alt="img" src={V_JP_TOK_1} className="image-wrap-right" />
      </div>

      <div className="head-wrap">
        <img alt="img" src={Material} className="img-wrap" />
        <div className="caption">WeWork Lorem ipsum</div>

      </div>

      <div className="cross-wrap">
        <div className="cross-title">Similar Projects</div>
        <div className="thumb-left">
          <img alt="img" src={H1} className="thumb" />
          <div className="project-title">
            WeWork
            <br />
            Shenzhen
          </div>
        </div>

        <div className="thumb-right">
          <img alt="img" src={H2} className="thumb" />
          <div className="project-title">
            WeWork
            <br />
            Shenzhen
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Project_SHoP;
