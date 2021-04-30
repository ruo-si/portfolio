import React from "react";
import "./pd.css";
import ReactCompareImage from "react-compare-image"

import H_JP_TOK_DAY from "../assets/H_JP_TOK_DAY.jpg";
import H_JP_TOK_NIGHT from "../assets/H_JP_TOK_NIGHT.jpg";
import V_JP_TOK_1 from "../assets/V_JP_TOK_1.jpg"
import V_JP_TOK_2 from "../assets/V_JP_TOK_2.jpg"

const Project1 = () => {

    return (

        <div>

            <div>

                <ReactCompareImage leftImage={H_JP_TOK_DAY} rightImage={H_JP_TOK_NIGHT} horizontal />

            </div>

            <div>
                <img alt="img" src={V_JP_TOK_1}/>

                <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </div>

            </div>

            <div>
                <img alt="img" src={V_JP_TOK_2}/>
                
                <div>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </div>
            </div>

        </div>
    )
}

export default Project1;
