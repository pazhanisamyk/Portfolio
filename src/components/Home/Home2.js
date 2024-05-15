import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillSkype,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Home2 = () => (
  <Container fluid className="home-about-section" id="about">
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />I am fluent in classics like
            <i>
              <b className="purple"> Javascript. </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="purple">Web Applications and Mobile Applications </b> and
              also in areas related to{" "}
              <b className="purple">
                Editing.
              </b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="purple"> React.js and Next.js</b>
            </i>
          </p>
        </Col>
        <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            {[
              { href: "https://github.com/pazhanisamyk", Icon: AiFillGithub },
              { href: "https://www.linkedin.com/in/pazhani-samy-15a977178", Icon: FaLinkedinIn },
              { href: "https://join.skype.com/invite/xdeXS5TW0OQE", Icon: AiFillSkype },
              { href: "https://api.whatsapp.com/send/?phone=6374657369&text=Hi Pazhanisamy&type=phone_number&app_absent=0", Icon: FaWhatsapp },
              { href: "https://instagram.com/mr_panruti_paiyan?igshid=MzNINGNkZWQ4Mg==", Icon: AiFillInstagram },
            ].map(({ href, Icon }, index) => (
              <li key={index} className="social-icons">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Home2;
