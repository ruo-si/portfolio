import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import ProjectArray from "../utils/projects";

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

                    Hi, I am a product designer and art director specializing in {" "}

                    <span class="accent-text"> UX</span>{" "}

                    design strategy, developing interactive{" "}

                    <span class="accent-text">Creative Content</span>{" "}

                    and building{" "}

                    <span class="accent-text">Digital Prototypes</span>.

                    <br />
                    <br />

                    What can I do for you?

                </div>

                {/* filter buttons */}
                <div className="filter-wrap">

                    <button className="filter" onClick={() => setItems(ProjectArray)}> All </button>
                    <button className="filter" onClick={() => filteredProjects("ux")}> UX </button>
                    <button className="filter" onClick={() => filteredProjects("cc")}> CREATIVE </button>
                    <button className="filter" onClick={() => filteredProjects("web")}> DEV </button>

                </div>

                {/* map function and render filtered results */}
                {items.map((elements) => {

                    // passed in from projectArray
                    const { name, image, location, path, className } = elements;

                    return (
                        <div>

                            <div className="container">

                                {/* project module/card */}
                                <div className={className}>

                                    <Link to={path}>
                                        <img alt="img" src={image} className="thumb" />
                                    </Link>

                                    <div className="project-title">
                                        {name}
                                        <br />
                                        {location}
                                    </div>

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