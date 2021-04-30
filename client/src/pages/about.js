import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/grid"

const About = () => {

return (

    <div>
        <div>

            Hi I am Victoria, I am a full stack web developer and result driven creative designer in 2D + 3D  visual communications, virtual reality and interactive content strategy. A motivated team player passionate about project management, storytelling and problem solving with code and design in a collaborative multicultural work environment.
             
        </div>

    <Container>
        <Row>
         <Col size="6">
             <form>
                <input
                    // value={this.state.email}
                    // onChange={this.handleInputChange}
                    name="subject"
                    placeholder="Subject"
                />

                 <input
                    // value={this.state.password}
                    // onChange={this.handleInputChange}
                    name="name"
                    placeholder="Your Name"
                />

                <input
                    // value={this.state.password}
                    // onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email Address"
                />

                <input
                    // value={this.state.password}
                    // onChange={this.handleInputChange}
                    name="message"
                    placeholder="Message"
                />

                <Link to="/about">

                    <button> Submit </button>

                </Link>
            </form>
        </Col>
    </Row>
</Container>

</div>
)
}


export default About;
