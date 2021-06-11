import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import mail from "../assets/mail.svg";
import scroll from "../assets/scroll.svg";

const Footer = () => {
  const [show, setShow] = useState(true);
  const controlFooter = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlFooter);
    return () => {
      window.removeEventListener("scroll", controlFooter);
    };
  }, []);

  return (
    <footer>
      <div className="scroll">
      <img alt="scroll down" src={scroll} />
      </div>
      <Link to="/about">
        {" "}
        <div className="mail">
        <img alt="img" src={mail} />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
