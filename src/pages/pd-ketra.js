import React from "react";
import "./pd.css";


// hero imagery
import LT_Dusk from "../assets/mockup.png";
import LT_Dusk2 from "../assets/mockup2.png";
import LT_Dusk3 from "../assets/mockup3.png";

// project imagery
import H1 from "../assets/LT_V_PLACEHOLDER.jpg";
import H2 from "../assets/LT_V_PLACEHOLDER.jpg";

// related projects
import R1 from "../assets/thumb/placeholder.png";
import R2 from "../assets/thumb/placeholder.png";

// video
import siteVideo from "../assets/ae/window_10.mp4"

const Project_Ketra = () => {

  return (

    <div className="pd-container">

      <div className="project-detail-wrap">

        {/* title */}
        <div className="project-name"> Light</div>

        {/* project info */}
        <div className="project-credit">

          <div>Client: Lutron Electronics x Ketra</div>
          <div>Visualization Consultant: Victoria Lee</div>
        </div>

        {/* project description */}
        <div className="project-detail">

          <div>Contribution:</div>
          <div>Art Direction, Visual Experience</div>
          <div>Tool:</div>
          <div>3DsMax, Corona, Forrest Pack, Adobe Suite</div>
          <div>Timeframe: Two Weeks</div>
        </div>

      </div>


      {/* site animation */}
      <div className="head-wrap">

        {/* <video autoPlay muted loop>
          <source src={siteVideo} type="video/mp4" />
        </video> */}


        <img src={LT_Dusk} alt="img" className="img-window" width="100%"/>
        <img src={LT_Dusk2} alt="img" className="img-window" width="100%"/>
        <img src={LT_Dusk3} alt="img" className="img-window" width="100%"/>


        {/* caption */}
        {/* <div className="caption">Light Temperature Spatial Experience</div> */}

      </div>

      <div className="text-img-wrap">

        <img alt="img" src={H1} className="image-wrap-left" />

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
        <img alt="img" src={H2} className="image-wrap-right" />
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

export default Project_Ketra;
