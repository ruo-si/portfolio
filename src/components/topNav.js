import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

const TopNav =() => {

  return (
    <div className="nav-wrap">
      <div className="header-left">
        <Link to="/"> Jamie Ruo-Si Lee </Link>
      </div>
      
      <div >
        <Link to="/about" className="header-right"> About </Link>
        <Link to="/press" className="header-right"> Press </Link>
      </div>
    </div>
  );
}

export default TopNav;
