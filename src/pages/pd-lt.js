import React, {useState} from "react";
import "./pd.css";
// import ReactCompareImage from "react-compare-image";

// hero imagery
import LT_Dusk from "../assets/LT_Dusk.jpg";
import LT_Morning from "../assets/LT_Morning.jpg";
import LT_Evening from "../assets/LT_Evening.jpg";
import LT_Midnight from "../assets/LT_Midnight.jpg";

// project imagery
import H1 from "../assets/LT_V_PLACEHOLDER.jpg";
import H2 from "../assets/LT_V_PLACEHOLDER.jpg";
import H3 from "../assets/LT_Evening.jpg";

// related projects
import R1 from "../assets/H_1.jpg";
import R2 from "../assets/H_2.jpg";

const Project_LT = () => {

  const imageList = [
    {
      name: "dusk",
      source: LT_Dusk
    },
    {
      name: "morning",
      source: LT_Morning
    },
    {
      name: "evening",
      source: LT_Evening
    },
    {
      name: "midnight",
      source: LT_Midnight
    }
  ]

  // initial state
  const [image, setImage] = useState(imageList)

  const filteredImage = (selectedImage) => {
    const updatedImage = imageList.filter((currEl) => {
      return currEl.name ===selectedImage
    })
    setImage(updatedImage)
  }

  return (

    <div className="pd-container">

      <div className="project-detail-wrap">

        {/* title */}
        <div className="project-name">Lutron</div>

        {/* project info */}
        <div className="project-credit">
          <div>Client: Lutron Electronics</div>
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

      {/* buttons */}
      <div>
        <button className="timeButton" onClick={() => filteredImage("dusk")}>Dusk</button>
        <button className="timeButton" onClick={() => filteredImage("morning")}>Morning</button>
        <button className="timeButton" onClick={() => filteredImage("evening")}>Evening</button>
        <button className="timeButton" onClick={() => filteredImage("midnight")}>Midnight</button>
      
      </div>
      {/* compare image */}
      <div className="head-wrap">

        <img src={LT_Dusk} alt="img" className="img" width="100%" />

        {/* caption */}
        <div className="caption">Light Temperature Spatial Experience</div>

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

      <div className="head-wrap">
        <img alt="img" src={H3} className="img-wrap" />
        <div className="caption">WeWork Lorem ipsum</div>

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

export default Project_LT;
