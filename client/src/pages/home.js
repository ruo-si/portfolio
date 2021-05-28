import React from "react";
import "./home.css";
// import testImg from "../assets/test.png";
import hero from "../assets/hero_asset.jpg";
import H1 from "../assets/H_1.jpg";
import H2 from "../assets/H_2.jpg";
import H3 from "../assets/H_3.jpg";
import H4 from "../assets/H_4.jpg";
import H5 from "../assets/H_5.jpg";
import H6 from "../assets/H_6.jpg";
import H7 from "../assets/H_7.jpg";
import H8 from "../assets/H_8.jpg";

const Home = () => {

  // const projectsArray = [
  //   {
  //     PprojectId: 1,
  //     name: "WeWork KDX",
  //     projectImage: H6,
  //     filterTag: "3d-vr"
  //   },

  //   {
  //     PprojectId: 2,
  //     name: "TCO",
  //     projectImage: H5,
  //     filterTag: "web"
  //   },

  //   {
  //     PprojectId: 3,
  //     name: "KXL",
  //     projectImage: H4,
  //     filterTag: "ux"
  //   },

  //   {
  //     PprojectId: 4,
  //     name: "TCO",
  //     projectImage: H3,
  //     filterTag: "ux"
  //   },

  // ]


  // function to filter array
  
  return (

    <div>

      <div className="index-wrap">
        <div className="index-manifesto">
          I am a creative designer and full stack developer in{" "}
          <span class="accent-text">User Experience </span>
          content creation, <span class="accent-text">
            Immersive 3D/VR
          </span>{" "}
          interactive strategy and{" "}
          <span class="accent-text">Web Development</span>.
        </div>

        <div className="filter-wrap">

          <div className="filter">All</div>
          <div className="filter">USER EXPERIENCE</div>
          <div className="filter">3D/VR</div>
          <div className="filter">WEB DEVELOPMENT</div>

        </div>


        <div className="container">
          <img alt="img" src={hero} className="thumb" />
          <div className="project-title">WeWork<br />Shenzhen</div>
        </div>
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
        <div className="container">
          <div className="thumb-left">
            <img alt="img" src={H3} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>

          <div className="thumb-right">
            <img alt="img" src={H4} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>
        </div>

        <div className="container">
          <div className="thumb-left">
            <img alt="img" src={H5} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>

          <div className="thumb-right">
            <img alt="img" src={H6} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>
        </div>

        <div className="container">
          <div className="thumb-left">
            <img alt="img" src={H7} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>

          <div className="thumb-right">
            <img alt="img" src={H8} className="thumb" />
            <div className="project-title">WeWork<br />Shenzhen</div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
