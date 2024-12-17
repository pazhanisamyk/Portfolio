import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import {
  AiFillGithub,
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
          I fell in love with programming, and every project I take on 
          <i>
              <b className="purple"> strengthens my skills and fuels my passion.</b>
            </i>
            <br />
            <br />I am fluent in core technologies like
            <i>
              <b className="purple"> Javascript &nbsp;</b>
            </i>
             and have expertise in building
            <i>
              <b className="purple"> efficient and scalable applications. </b>
            </i>
            <br />
            <br />
            My fields of interest include building innovative &nbsp;
            <i>
              <b className="purple">Web Applications and Mobile Applications. </b> 
              I am also passionate about &nbsp;
              <b className="purple">
              video editing and creative content development.
              </b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                &nbsp;
                Modern Javascript Library and Frameworks,
              </b>
            </i>
            &nbsp; including
            <i>
              <b className="purple"> React.js, React Native and Next.js,</b>
            </i>
            &nbsp; which I leverage to build &nbsp;
            <i>
              <b className="purple"> dynamic and user-friendly interfaces.</b>
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
              // { href: "https://instagram.com/mr_panruti_paiyan?igshid=MzNINGNkZWQ4Mg==", Icon: AiFillInstagram },
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
