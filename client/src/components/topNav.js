import React from "react";
import { Link } from "react-router-dom";

function TopNav() {

  return (

    <div>

      <Link to="/"> Victoria Lee </Link>

      <Link to="/"> Works </Link>

      <Link to="/about"> About </Link>

      <Link to="/press"> Press </Link>

    </div>

  )

}

export default TopNav;
