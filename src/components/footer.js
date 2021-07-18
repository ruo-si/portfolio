import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import mail from "../assets/mail.svg";
import scroll from "../assets/scroll.svg";

const Footer = () => {
  const [show, setShow] = useState(true)
  const controlNavbar = () => {
      if (window.scrollY > 100) {
          setShow(false)
      } else {
          setShow(true)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
  return (
    <footer>
      <div className="scroll">
      <img alt="scroll down" src={scroll} />
      </div>
      <Link to="/about">
        {" "}
        <div >
        <img alt="img" src={mail} className="mail"/>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
