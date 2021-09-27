import React, { useState, useEffect } from "react";
import "./pd.css";
// import ReactCompareImage from "react-compare-image";

// hero imagery
import LT_Dusk from "../assets/mockup.png";
// import LT_Dusk2 from "../assets/mockup2.png";
// import LT_Dusk3 from "../assets/mockup3.png";


import LT_Morning from "../assets/LT_Morning.jpg";
import LT_Evening from "../assets/LT_Evening.jpg";
import LT_Midnight from "../assets/LT_Midnight.jpg";

// project imagery
import H1 from "../assets/LT_V_PLACEHOLDER.jpg";
import H2 from "../assets/LT_V_PLACEHOLDER.jpg";
import H3 from "../assets/LT_Evening.jpg";

// related projects
import R1 from "../assets/thumb/placeholder.png";
import R2 from "../assets/thumb/placeholder.png";

// icons
import dusk_icon from "../assets/icons/icon-15.svg"
import morning_icon from "../assets/icons/icon-14.svg"
import evening_icon from "../assets/icons/icon-16.svg"


// video
import siteVideo from "../assets/ae/window_10.mp4"

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

  // button filter select
  const filteredImage = (selectedImage) => {
    const updatedImage = imageList.filter((currEl) => {
      return currEl.name === selectedImage
    })
    setImage(updatedImage)
  }
  console.log(image)

  // page scroll to top
  const ScrollToTopOnMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }


  return (

    <div className="pd-container">

      <ScrollToTopOnMount />

      <div className="project-detail-wrap">

        {/* title */}
        <div className="project-name"> Lutron</div>

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


      {/* site animation */}
      <div className="head-wrap">

        <video autoPlay muted loop>
          <source src={siteVideo} type="video/mp4" />
        </video>

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

      <div>
        <button>
          <img alt="button" src={dusk_icon} onClick={() => filteredImage("dusk")} />
          button
        </button>

        <button>
          <img alt="button" src={dusk_icon} />
          button
        </button>

        <button>
          <img alt="button" src={morning_icon} />
          button
        </button>

        <button>
          <img alt="button" src={evening_icon} />
          button
        </button>
      </div>

      <div className="head-wrap">


        <img alt="img" src={H3} className="img-wrap" />
        <div className="caption">Try out the colour temperature feature!</div>

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
