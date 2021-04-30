import React from "react";
import "./pd.css";
import ReactCompareImage from "react-compare-image"

import H_LT_2 from "../assets/H_LT_2.jpg";
import H_LT_3 from "../assets/H_LT_3.jpg";

const ProjectLT = () => {

    return (

        <div>

            <div>

                <ReactCompareImage leftImage={H_LT_2} rightImage={H_LT_3} horizontal />

            </div>

        </div>
    )
}

export default ProjectLT;
