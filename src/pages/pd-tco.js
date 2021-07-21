import React from "react";
import "./pd.css";
import ReactCompareImage from "react-compare-image";

// hero imagery
import BEFORE from "../assets/TCO_AFTER.jpg";
import AFTER from "../assets/TCO_BEFORE.jpg";

// project imagery
import H1 from "../assets/TCO_1.jpg";
import H2 from "../assets/TCO_2.jpg";
import H3 from "../assets/TCO_3.jpg";

// related imagery
import R1 from "../assets/H_7.jpg";
import R2 from "../assets/H_5.jpg";


const Project_Tco = () => {

  return (

    <div className="pd-container">

      <div className="project-detail-wrap">

        {/* title */}
        <div className="project-name">Tiffany & Co. - LVMH</div>

        {/* project info */}
        <div className="project-credit">
          <div>Design Director: Richard Moore</div>
          <div>Creative Visual Marketing Consultant: Victoria Lee</div>
          <div>Design: Global Store Design Team</div>
          
        </div>

        {/* project description */}
        <div className="project-detail">
          <div>Contribution:</div>
          <div>Art Direction, Visual Experience</div>
          <div>Tool:</div>
          <div>3DsMax, Corona, Forrest Pack, Adobe Suite</div>
          {/* <div>Timeframe:</div> */}
          <div>At Tiffany and Co., I provide 3D visualization services and lead the department in building out a complete workflow and infrastructure to support the global creative development process and the rebrand process after the LVMH merger.</div>
        </div>

      </div>

      {/* compare image */}
      <div className="head-wrap">

        <ReactCompareImage
          leftImage={BEFORE}
          rightImage={AFTER}
          horizontal
        />

        {/* caption */}
        <div className="caption">Space and material exploration for a location. The method of building the spaces in virtually allowed the team to work globally and respond to market needs in realtime.</div>

      </div>

      <div className="text-img-wrap">

        <img alt="img" src={H1} className="image-wrap-left" />

        <div className="text-wrap-right">
          A realistic 3D model built in 3DsMax of the Condotti location in Italy. Renderedin Corona rendering engine and textures enhanced with Substance.
        </div>
      </div>

      <div className="text-img-wrap">
        <div className="text-wrap-left">
          3D printed tileable plaster relief panel design to be efficiently produced and installed globally as wall covering telling the New York City Heritage of Tiffany and Co..
        </div>
        <img alt="img" src={H2} className="image-wrap-right" />
      </div>

      <div className="head-wrap">
        <img alt="img" src={H3} className="img-wrap" />
        <div className="caption">The signature Blue Box Cafe realized for the South Coast Plaza location in California. Featured in LA Times, this enabled the true experience of Breakfast at Tiffany's.</div>

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
  );
};

export default Project_Tco;
