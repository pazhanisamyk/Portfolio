import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineSkype,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <AiFillGithub />, url: "https://github.com/pazhanisamyk" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/pazhani-samy-15a977178" },
    { icon: <AiOutlineSkype />, url: "https://join.skype.com/invite/xdeXS5TW0OQE" },
    { icon: <FaWhatsapp />, url: "https://api.whatsapp.com/send/?phone=6374657369&text=Hi Pazhanisamy&type=phone_number&app_absent=0" },
    // { icon: <AiFillInstagram />, url: "https://instagram.com/mr_panruti_paiyan?igshid=MzNINGNkZWQ4Mg==" },
  ];

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by <span className="purple">Pazhanisamy K</span></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} <span className="purple">Pazhanisamy K</span></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map((link, index) => (
              <li className="social-icons" key={index}>
                <a
                  href={link.url}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
