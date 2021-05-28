import React from "react";
// import { Link } from "react-router-dom";
import H1 from "../assets/H_1.jpg";
import H2 from "../assets/H_2.jpg";

function ProjectCard() {

    return (

        <div>

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

        </div>

    )
};

export default ProjectCard;