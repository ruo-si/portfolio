import React from "react";
import "./pd.css";
import ReactCompareImage from "react-compare-image";

// project her imagery
import H_JP_TOK_DAY from "../assets/H_JP_TOK_DAY.jpg";
import H_JP_TOK_NIGHT from "../assets/H_JP_TOK_NIGHT.jpg";

// project imagery
import H1 from "../assets/JPN_TOK_1.jpg";
import H2 from "../assets/JPN_TOK_2.jpg";
import H3 from "../assets/material_collage.jpg";

// related projects
import R1 from "../assets/thumb/H_1.jpg";
import R2 from "../assets/thumb/H_2.jpg";


const Project_Tokyo = () => {

  return (

    <div className="pd-container">

      <div className="project-detail-wrap">

        {/* title */}
        <div className="project-name">WeWork KDX</div>

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
          <div>Timeframe: 2 Weeks</div>

          <div>This project is a rennovation project in existing office building in Tokyo. The goal was to relaunch a new set of marketing imagery to raise the targetted leasing rate as well as getting the existing members excited about the newly visualized space.</div>
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
        <div className="caption">The outdoor terrace space visualized and re-designed as a multi purpose space with atmosphere transforming with light. </div>

      </div>

      <div className="text-img-wrap">

        <img alt="img" src={H1} className="image-wrap-left" />

        <div className="text-wrap-right">
          Interior space is rendered with hyper realistic 3D modeling and curated lighting. Ceiling duct work and exterior plants are generated with Railclone and Forrest Pack by Itoo Software. Adobe Substance is used to detail fabric textures to add dimensionality.
        </div>
      </div>

      <div className="text-img-wrap">
        <div className="text-wrap-left">
          An exterior vignette focusing on tranquility with some depth of field and soft lighting rendered with Corona Render Engine. Minimal post production using Corona Editor and Adobe Photoshop.
        </div>
        <img alt="img" src={H2} className="image-wrap-right" />
      </div>

      <div className="head-wrap">
        <img alt="img" src={H3} className="img-wrap" />
        <div className="caption">As with all WeWork projects, each location has its unique pallette and colour scheme that echos its local culture. For this project, custom fabrics textures and vegetation were modelled to each view to capture the specific moment in time.</div>

      </div>

      <div className="cross-wrap">
        <div className="cross-title">Similar Projects</div>
        <div className="thumb-left">
          <img alt="img" src={R1} className="thumb" />
          <div className="project-title">
            WeWork
            <br />
            Shenzhen
          </div>
        </div>

        <div className="thumb-right">
          <img alt="img" src={R2} className="thumb" />
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

export default Project_Tokyo;
