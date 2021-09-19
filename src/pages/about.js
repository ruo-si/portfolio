import React from "react";
import emailjs from "emailjs-com";
import arrow from "../assets/link_out.svg";
import "./about.css";


const About = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zxznxs4",
        "template_38kexia",
        e.target,
        "user_U555spLCYhH6rvOSPbjrU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (

    <div className="about-wrap">
      <div className="container">
        <div className="intro-wrap">

          {/* heading */}
          <div className="module-title"> About</div>

          {/* bio paragraph */}
          <div className="intro-text">
            Hi I am Jamie, I am a full stack web developer and result driven
            creative designer in 2D + 3D visual communications, virtual reality
            and interactive content strategy. A motivated team player passionate
            about project management, storytelling and problem solving with code
            and design in a collaborative multicultural work environment.
          </div>

          <button className="linkout-button" > Linkedin </button>
          <button className="linkout-button" > github </button>
          <button className="linkout-button" > instagram </button>
        </div>

        {/* contact form */}
        <form onSubmit={sendEmail}>

          <input type="text" name="subject" placeholder="Subject" />
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Email" />

          <textarea name="message" placeholder="Your Message" />

          <button type="submit" value="Send">Submit
            <img alt="linkout" src={arrow} class="linkout" />
          </button>

        </form>

      </div>
    </div>
  );
};

export default About;
