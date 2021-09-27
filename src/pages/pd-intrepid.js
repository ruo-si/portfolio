import React from "react";
import "./pd.css";
import headerVideo from "../assets/ae/intrepid.mp4";
import processVideo from "../assets/ae/intrepid2.mp4";

import placeHolder from "../assets/wot_placeholder@2x.png";

import img2 from "../assets/intrepid-1.png"
import img1 from "../assets/intrepid-3.png"
import img4 from "../assets/intrepid-4.png"
import img5 from "../assets/intrepid-5.png"


const ProjectWasteOfTime = () => {

  return (
    <div className="pd-container">
      <div className="project-detail-wrap">

        {/* title */}
        <div className="project-name">Intrepid</div>
        <div className="project-credit">

          <div>Role: Visualization Specialist & Product Designer</div>
          <div>Methodologies: </div>

          <div>
            Strategy, Ideation, Prototyping, Usability Testing, Visual Design
          </div>

          <div>Timeframe: 5 weeks</div>
        </div>

        <div className="project-detail">
          <div>
            Waste of Time is a product where one can learn about the waste
            scenario in their surrounding environment as well as virtually
            starting their waste recycling journey.
          </div>
        </div>
      </div>

      {/* linkout buttons */}
      <button className="linkout-button" > Related Press </button>

      {/* video */}
      <div className="head-wrap">
        <video autoPlay muted loop>
          <source src={headerVideo} type="video/mp4" className="video-window"/>
        </video>
        {/* <img src={img1} alt="img" width="100%"></img> */}
      </div>

      <div className="split-wrap">

        {/* title */}
        {/* <div className="cross-title">Process</div> */}

        <div className="split-bg-left" >
          <div className="split-text-left">

            {/* title */}
            {/* <div className="module-title">User Testing</div> */}

            {/* All of the users found the product to have be a great addition to
            their daily routine and look forward to it being responsive to
            multiple countries and areas in the world. */}

        <img src={img5} alt="img" width="100%"></img>


          </div>
        </div>

        <div className="split-bg-right">
          <div className="split-text-right">

            {/* title */}
            <div className="module-title">Scope</div>

            <div>
              users responded positivle to the clean, intuitive user flow and
              quickly adapted to the game rules and excited to re-challenge
              themselves to improve previous scores.
            </div>

          </div>
        </div>
      </div>


      <div className="split-wrap">

{/* title */}
{/* <div className="cross-title">Process</div> */}

<div className="split-bg-left" >
  <div className="split-text-left">

    {/* title */}
    {/* <div className="module-title">User Testing</div> */}

    {/* All of the users found the product to have be a great addition to
    their daily routine and look forward to it being responsive to
    multiple countries and areas in the world. */}

<img src={img4} alt="img" width="100%"></img>


  </div>
</div>

<div className="split-bg-right">
  <div className="split-text-right">

    {/* title */}
    <div className="module-title">Scan</div>

    <div>
      users responded positivle to the clean, intuitive user flow and
      quickly adapted to the game rules and excited to re-challenge
      themselves to improve previous scores.
    </div>

  </div>
</div>
</div>

      

      {/* hero quote */}
      <div className="quote">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”
      </div>

      <div>
        <div className="cross-title">The Brand</div>
        {/* <img src={img2} className="head-wrap" alt="imageRef" /> */}

        <video autoPlay muted loop>
          <source src={processVideo} type="video/mp4"/>
        </video>
      </div>

      <div className="split-wrap">
        <div className="split-bg-left">
          <div className="split-text-left">

            <div className="module-title">The Solution</div>
            Waste of Time streamlines multiple learning methods from simulating
            users with the gamification feature to keeping track of the learning
            process with the personalized dashboard.
          </div>

        </div>

        <div className="split-bg-right">
          <div className="split-text-right">

            {/* title */}
            <div className="module-title">User Journey</div>

            {/* list icons */}
            <img src={placeHolder} className="icon" alt="icon" />
            <img src={placeHolder} className="icon" alt="icon" />
            <img src={placeHolder} className="icon" alt="icon" />
            <img src={placeHolder} className="icon" alt="icon" />
            <img src={placeHolder} className="icon" alt="icon" />
          </div>
        </div>
      </div>

      <div className="split-wrap">
        <div
          className="split-bg-left"
          style={{ borderRight: "1px solid #eaeaea" }}
        >
          <div className="split-text-left">

            {/* title */}
            <div className="module-title">Future Exploration</div>

            based on responses we have collected from user interviews, concept
            exploration and usability testings. We have a few things we would
            like to push the product futher as furutre development.

          </div>
        </div>

        <div className="split-bg-right">
          <div className="split-text-right">
            <div className="icon-set">

              {/* image */}
              <img src={placeHolder} className="icon" alt="icon" />

              <div className="icon-text">
                The waste system is an often overlooked aspect when we think
                about the environment
              </div>

            </div>

            <div className="icon-set">
              <img src={placeHolder} className="icon" alt="icon" />
              <div>The lack of knowledge of properly recycling</div>
            </div>

            <div className="icon-set">
              <img src={placeHolder} className="icon" alt="icon" />
              <div>localized differences in recycling categories</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWasteOfTime;