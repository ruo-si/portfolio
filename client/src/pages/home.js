import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./home.css";
import ProjectArray from "../utils/projects"

const Home = () => {

  // initial state
  const [items, setItems] = useState(ProjectArray);

  // filtered state
  const filteredProjects = (selectedFilter) => {
    const updatedItems = ProjectArray.filter((currEl) => {
      return currEl.filterTag === selectedFilter;
    })

    setItems(updatedItems);
  }

  return (

    <div>

      {/* top hero text */}
      <div className="index-wrap">
        <div className="index-manifesto">
          I am a product designer and full stack developer specializing in{" "}
          <span class="accent-text">User Experience </span>
          creative strategy, <span class="accent-text">
            Immersive 3D/VR
          </span>{" "}
          interactive content creation and{" "}
          <span class="accent-text">Web Development</span>.
        </div>

        {/* filter buttons */}
        <div className="filter-wrap">

          <button className="filter" onClick={() => setItems(ProjectArray)}> All</button>
          <button className="filter" onClick={() => filteredProjects("ux")}> USER EXPERIENCE</button>
          <button className="filter" onClick={() => filteredProjects("3d-vr")}>3D/VR</button>
          <button className="filter" onClick={() => filteredProjects("web")}>WEB DEVELOPMENT</button>

        </div>

        {/* map function and render filtered results */}
        {
          items.map((elements) => {
            const { name, image, location, path } = elements;
            return (
              <div>

                <div className="container">
                  <div className="thumb-left">

                    <Link to={path}>
                    <img alt="img" src={image} className="thumb"/>
                    </Link>

                    <div className="project-title">{name}<br />{location}</div>
                  </div>

                  {/* <div className="thumb-right">
                    <img alt="img" src={image} className="thumb" />
                    <div className="project-title">{name}<br />{location}</div>
                  </div> */}

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
