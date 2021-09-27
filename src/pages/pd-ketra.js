import React from "react";
import "./pd.css";


// hero imagery
import LT_Dusk from "../assets/mockup.png";
import LT_Dusk2 from "../assets/mockup2.png";
import LT_Dusk3 from "../assets/mockup3.png";

// project imagery

// related projects
import R1 from "../assets/thumb/placeholder.png";
import R2 from "../assets/thumb/placeholder.png";

// video
import siteVideo from "../assets/ae/ketra.mp4"

const Project_Ketra = () => {

  return (

    <div className="pd-container">

      <div className="project-detail-wrap">

        {/* title */}
        <div className="project-name"> Personalized Light</div>

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

        <video autoPlay muted loop>
          <source src={siteVideo} type="video/mp4" />
        </video>


        <img src={LT_Dusk} alt="img" className="img-window" width="100%"/>
        <img src={LT_Dusk2} alt="img" className="img-window" width="100%"/>
        <img src={LT_Dusk3} alt="img" className="img-window" width="100%"/>


        {/* caption */}
        {/* <div className="caption">Light Temperature Spatial Experience</div> */}

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
