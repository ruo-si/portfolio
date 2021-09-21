import React from "react";
import "./pd.css";
import ReactCompareImage from "react-compare-image"

// hero imagery
import H_MX_BOT_DAY from "../assets/H_MX_BOT_DAY.jpg";
import H_MX_BOT_NIGHT from "../assets/H_MX_BOT_NIGHT.jpg";

// project imagery
import H1 from "../assets/BAR_CAL_1.jpg";
import H2 from "../assets/BAR_CAL_1.jpg";
import H3 from "../assets/BAR_CAL_2.jpg";

// related projects
import R1 from "../assets/thumb/H_1.jpg";
import R2 from "../assets/thumb/H_1.jpg";


const Project_Colombia = () => {

    return (

        <div className="pd-container">

            <div className="project-detail-wrap">

                {/* title */}
                <div className="project-name">WeWork
                    <br />
                    Barranquilla, Colombia
                </div>

                {/* project info */}
                <div className="project-credit">
                    <div>Design Director: Christina Crespo</div>
                    <div>Creative Director: Matias Lloveras</div>
                    <div>Visualization Lead: Victoria Lee & Sheena Garcia</div>
                    <div>Interior Design Lead: Danriel Ruiz</div>
                    <div>Arts & Graphics Lead: Eric Friedenson</div>
                </div>

                {/* project description */}
                <div className="project-detail">
                    <div>Contribution:</div>
                    <div>Art Direction, Visual Experience</div>
                    <div>Tools:</div>
                    <div>Autodesk 3DsMax, Corona Render Engine, Forrest Pack, Adobe Creative Suite, JavaScript, MaxScript</div>
                    <div>Timeframe: 2 weeks</div>
                </div>

            </div>

            <button className="linkout-button" > Visit Site </button>
            <button className="linkout-button" > 3D Experience </button>

            {/* compare image */}
            <div className="head-wrap">

                <ReactCompareImage
                    leftImage={H_MX_BOT_DAY}
                    rightImage={H_MX_BOT_NIGHT}
                    horizontal
                />

                {/* caption */}
                <div className="caption">WeWork Barranguilla, flexible lounge space for day and night transformation.</div>

            </div>

            <div className="text-img-wrap">

                <img alt="img" src={H1} className="image-wrap-left" />

                <div className="text-wrap-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam
                </div>

            </div>

            <div className="text-img-wrap">
                <div className="text-wrap-left">
                    Having fun with different perspectives! Through a different lens, tell a more playful spatial story of the lounge. This peep hole on the connecting door to the private offices become an Instagram hot spot!
                </div>
                <img alt="img" src={H2} className="image-wrap-right" />
            </div>

            <div className="head-wrap">
                <img alt="img" src={H3} className="img-wrap" />
                <div className="caption">The marketing image showing the coffee bar as well as a touch of local vibe.</div>

            </div>

            <div className="cross-wrap">
                <div className="cross-title">Related Projects</div>
                <div className="thumb-left">
                    <img alt="img" src={R1} className="thumb" />
                    <div className="project-title">
                        WeWork
                        <br />
                        Shenzhen
                    </div>
                </div>

                <div className="thumb-right">
                    <img alt="img" src={R2} className="thumb" />
                    <div className="project-title">
                        WeWork
                        <br />
                        Shenzhen
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project_Colombia;
