import React, { useState } from "react";
import "./home.css";
// import testImg from "../assets/test.png";
// import hero from "../assets/hero_asset.jpg";

import ProjectArray from "../utils/projects"

import ProjectCard from "../components/projectCard"

const Home = () => {

  const [items, setItems] = useState(ProjectArray);

  return (

    <div>

      <div className="index-wrap">
        <div className="index-manifesto">
          I am a creative designer and full stack developer in{" "}
          <span class="accent-text">User Experience </span>
          content creation, <span class="accent-text">
            Immersive 3D/VR
          </span>{" "}
          interactive strategy and{" "}
          <span class="accent-text">Web Development</span>.
        </div>

        <div className="filter-wrap">

          <button className="filter">All</button>
          <button className="filter">USER EXPERIENCE</button>
          <button className="filter">3D/VR</button>
          <button className="filter">WEB DEVELOPMENT</button>

        </div>


        {/* <div className="container">
          <img alt="img" src={hero} className="thumb" />
          <div className="project-title">WeWork<br />Shenzhen</div>
        </div>

        <div className="container">
          <div className="thumb-left">
            <img alt="img" src={H1} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>

          <div className="thumb-right">
            <img alt="img" src={H2} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>
        </div>

        <div className="container">
          <div className="thumb-left">
            <img alt="img" src={H3} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>

          <div className="thumb-right">
            <img alt="img" src={H4} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>
        </div>

        <div className="container">
          <div className="thumb-left">
            <img alt="img" src={H5} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>

          <div className="thumb-right">
            <img alt="img" src={H6} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>
        </div>

        <div className="container">
          <div className="thumb-left">
            <img alt="img" src={H7} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>

          <div className="thumb-right">
            <img alt="img" src={H8} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>
        </div> */}
        {

          items.map((elements) => {
            const { id, name, image, location, filterTag } = elements;
            return (
              <div>

                <div className="container">
                  <div className="thumb-left">
                    <img alt="img" src={image} className="thumb" />
                    <div className="project-title">{name}<br />{location}</div>
                  </div>

                  <div className="thumb-right">
                    <img alt="img" src={image} className="thumb" />
                    <div className="project-title">{name}<br />{location}</div>
                  </div>
                </div>

              </div>
            )
          })
        }


      </div>
    </div>
  );
};

export default Home;
