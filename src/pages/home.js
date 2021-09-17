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

          and strategy, interactive

          <span class="accent-text">  Content Creation </span>{" "}

          and {" "}

          <span class="accent-text">Web Development</span>.

        </div>

        {/* filter buttons */}
        <div className="filter-wrap">

          <button className="filter" onClick={() => setItems(ProjectArray)}> All</button>
          <button className="filter" onClick={() => filteredProjects("ux")}> USER EXPERIENCE</button>
          <button className="filter" onClick={() => filteredProjects("cc")}> CREATIVE CONTENT</button>
          {/* <button className="filter" onClick={() => filteredProjects("vr")}>VIRTUAL REALITY</button> */}
          <button className="filter" onClick={() => filteredProjects("web")}>WEB DEVELOPMENT</button>

        </div>

        {/* map function and render filtered results */}
        {
          items.map((elements) => {

            // passed in project 
            const { name, image, location, path, className } = elements;
            
            return (
              <div>

                <div className="container">

                  {/* project module/card */}
                  <div className={className}>

                    <Link to={path}>
                      <img alt="img" src={image} className="thumb" />
                    </Link>

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
