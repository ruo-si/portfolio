import React from "react";
import "./pd.css";
import ReactCompareImage from "react-compare-image"

import H_MX_BOT_DAY from "../assets/H_MX_BOT_DAY.jpg";
import H_MX_BOT_NIGHT from "../assets/H_MX_BOT_NIGHT.jpg";

const Project2 = () => {

    return (

        <div className="pd-container">

                    <div className="head-wrap"className="head-wrap">

                <ReactCompareImage leftImage={H_MX_BOT_DAY} rightImage={H_MX_BOT_NIGHT} horizontal />

            </div>

        </div>
    )
}

export default Project2;
