import React from "react";
import "./pd.css";
import ReactCompareImage from "react-compare-image";

// hero imagery
import DAY from "../assets/SHOP_FALL.jpg";
import NIGHT from "../assets/SHOP_WINTER.jpg";

// project imagery
import H1 from "../assets/SHOP_2.jpg";
import H2 from "../assets/SHOP_1.jpg";
import H3 from "../assets/SHOP_3.jpg";

// related projects
import R1 from "../assets/thumb/H_3.jpg";
import R2 from "../assets/thumb/H_5.jpg";


const Project_SHoP= () => {

  return (

    <div className="pd-container">

      <div className="project-detail-wrap">

        {/* title */}
        <div className="project-name">SHoP Architects</div>

        {/* project info */}
        <div className="project-credit">
          <div>Firm: SHoP Architects</div>
          <div>Visualization Director: Mengyi Fan</div>
          <div>Interactive Visualization Designer: Victoria Lee</div>
        </div>
        
        {/* project description */}
        <div className="project-detail">
          <div>Contribution:</div>
          <div>Art Direction, Visual Experience</div>
          <div>Tool:</div>
          <div>3DsMax, V-Ray Render Engine, Forrest Pack, Adobe Suite</div>
          {/* <div>Timeframe:</div> */}

          <div>At ShoP Architects, I worked on a wide variety of projects in residential, hospitality, commercial and office spaces. I was able to participate in the process of visualizing projects for clients and investors to engage and realize the projects. My work focuses on using 3D and interactive strategy to help the projects come to life and tell a story before it is celebrated.</div>
        </div>

      </div>

      {/* buttons */}
      <div>
        <button>Dusk</button>
        <button>Morning</button>
        <button>Evening</button>
        <button>Midnight</button>
      </div>

      {/* compare image */}
      <div className="head-wrap">

        <ReactCompareImage
          leftImage={DAY}
          rightImage={NIGHT}
          horizontal
        />

        {/* caption */}
        <div className="caption">Imagery for the proposal of the Obama Presidential Library for SHoP Architects, placed 4th place in the selection process. A event space that encourages activity throughout the seasons enjoyed by the local community.</div>

      </div>

      <div className="text-img-wrap">

        <img alt="img" src={H1} className="image-wrap-left" />

        <div className="text-wrap-right">
          A winning project bidding visualization for Fulbright University in Vietnam. 
        </div>
      </div>

      <div className="text-img-wrap">
        <div className="text-wrap-left">
          A built project: affordable and efficient apartment building located in Brooklyn, New York. The model is built in Rhino paired with Grasshopper and modified in 3DsMax and rendered with V-Ray Rendering Engine.
        </div>
        <img alt="img" src={H2} className="image-wrap-right" />
      </div>

      <div className="head-wrap">
        <img alt="img" src={H3} className="img-wrap" />
        <div className="caption">A visual proposal for a Silicon Valley Tech headquarters.</div>

      </div>

      <div className="cross-wrap">
        <div className="cross-title">Related Projects</div>
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

export default Project_SHoP;
