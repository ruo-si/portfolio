import React, { useState } from "react";
import "./home.css";
// import testImg from "../assets/test.png";
// import hero from "../assets/hero_asset.jpg";

import ProjectArray from "../utils/projects"

const Home = () => {

  const [items, setItems] = useState(ProjectArray);

  const filteredProjects = (selectedFilter) => {
    const updatedItems = ProjectArray.filter((currEl) => {
      return currEl.filterTag === selectedFilter;
    })

    setItems(updatedItems);
  }

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

          <button className="filter" onClick={() => setItems(ProjectArray)}> All</button>
          <button className="filter" onClick={() => filteredProjects("ux")}> USER EXPERIENCE</button>
          <button className="filter" onClick={() => filteredProjects("3d-vr")}>3D/VR</button>
          <button className="filter" onClick={() => filteredProjects("web")}>WEB DEVELOPMENT</button>

        </div>

        {

          items.map((elements) => {
            const { name, image, location } = elements;
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
