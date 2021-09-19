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

          Hello, I am a product designer and art director specializing in {" "}

          <span class="accent-text"> User Experience </span>

          design strategy, interactive

          <span class="accent-text">  Content Creation </span>{" "}

          and building{" "}

          <span class="accent-text">Web Development</span> prototypes. 

          <br/>
          <br/>

          What can I do for you?

        </div>

        {/* filter buttons */}
        <div className="filter-wrap">

          <button className="filter" onClick={() => setItems(ProjectArray)}> All </button>
          <button className="filter" onClick={() => filteredProjects("ux")}> UX </button>
          <button className="filter" onClick={() => filteredProjects("cc")}> CREATIVE CONTENT </button>
          <button className="filter" onClick={() => filteredProjects("web")}> DEVELOPMENT </button>

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
