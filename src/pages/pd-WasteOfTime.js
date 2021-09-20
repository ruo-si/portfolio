import React from "react";
import "./pd.css";
import headerVideo from "../assets/wot_v3.mp4";
import material from "../assets/wot_materials@2x.jpg";
import placeHolder from "../assets/wot_placeholder@2x.png";
const ProjectWasteOfTime = () => {
  return (
    <div className="pd-container">
      <div className="project-detail-wrap">
        <div className="project-name">Waste of Time</div>
        <div className="project-credit">
          <div>Role: Product Designer & UX Designer</div>
          <div>Methodologies: </div>
          <div>
            Competitive Analysis, User Interviews, Strategy, Ideation,
            Prototyping, Usability Testing, Visual Design
          </div>
          <div>Timeframe: 3 weeks</div>
        </div>
        <div className="project-detail">
          <div>
            Waste of Time is a product where one can learn about the waste
            scenario in their surrounding environment as well as virtually
            starting their waste recycling journey.
          </div>
        </div>
      </div>


      <button className="linkout-button" > Github </button>
      <button className="linkout-button" > View Project </button>
      <div className="head-wrap">
        <video autoPlay muted loop>
          <source src={headerVideo} type="video/mp4" />
        </video>
      </div>
      <div className="split-wrap">
        <div className="split-bg-left" style={{ backgroundColor: "#1D4144", color: "#ffffff" }}>
          <div className="split-text-left">
            The Brief
            <br />
            <br />
            How might we create a platform for individuals to learn about waste
            eco-system?
          </div>
        </div>

        <div className="split-bg-right" style={{ backgroundColor: "#eaeaea" }}>
          <div className="split-text-right">
            Identified Issues
            <br />
            <br />
            <div className="icon-set">
              <img src={placeHolder} className="icon" />
              <div className="icon-text">
                The waste system is an often overlooked aspect when we think
                about the environment
              </div>
            </div>
            <div className="icon-set">
              <img src={placeHolder} className="icon" />
              <div>The lack of knowledge of properly recycling</div>
            </div>
            <div className="icon-set">
              <img src={placeHolder} className="icon" />
              <div>localized differences in recycling categories</div>
            </div>
          </div>
        </div>
      </div>

      <div className="split-wrap">
        <div className="cross-title">User Testing</div>
        <div
          className="split-bg-left"
          style={{ borderRight: "1px solid #eaeaea" }}
        >
          <div className="split-text-left">
            <div className="module-title">User Testing</div>
            All of the users found the product to have be a great addition to
            their daily routine and look forward to it being responsive to
            multiple countries and areas in the world.
          </div>
        </div>

        <div className="split-bg-right">
          <div className="split-text-right">
            <div className="module-title">User Testing</div>
            <div>
              users responded positivle to the clean, intuitive user flow and
              quickly adapted to the game rules and excited to re-challenge
              themselves to improve previous scores.
            </div>
          </div>
        </div>
      </div>

      <div className="quote">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad”
      </div>

      <div>
        <div className="cross-title">The Brand</div>
        <img src={material} className="head-wrap" />
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
            <div className="module-title">User Journey</div>
            <img src={placeHolder} className="icon" />
            <img src={placeHolder} className="icon" />
            <img src={placeHolder} className="icon" />
            <img src={placeHolder} className="icon" />
            <img src={placeHolder} className="icon" />
          </div>
        </div>
      </div>

      <div className="split-wrap">
        <div
          className="split-bg-left"
          style={{ borderRight: "1px solid #eaeaea" }}
        >
          <div className="split-text-left">
            <div className="module-title">Future Exploration</div>
            based on responses we have collected from user interviews, concept
            exploration and usability testings. We have a few things we would
            like to push the product futher as furutre development.
          </div>
        </div>

        <div className="split-bg-right">
          <div className="split-text-right">
            <div className="icon-set">
              <img src={placeHolder} className="icon" />
              <div className="icon-text">
                The waste system is an often overlooked aspect when we think
                about the environment
              </div>
            </div>
            <div className="icon-set">
              <img src={placeHolder} className="icon" />
              <div>The lack of knowledge of properly recycling</div>
            </div>
            <div className="icon-set">
              <img src={placeHolder} className="icon" />
              <div>localized differences in recycling categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWasteOfTime;
