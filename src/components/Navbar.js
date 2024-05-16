import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} style={{height:'20%',width:'20%'}} alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
          <NavItem to="/" icon={<AiOutlineHome />} text="Home" onClick={() => updateExpanded(false)} />
            <NavItem to="/about" icon={<AiOutlineUser />} text="About" onClick={() => updateExpanded(false)} />
            <NavItem
              to="/project"
              icon={<AiOutlineFundProjectionScreen />}
              text="Projects"
              onClick={() => updateExpanded(false)}
            />
            <NavItem
              to="/resume"
              icon={<CgFileDocument />}
              text="Resume"
              onClick={() => updateExpanded(false)}
            />
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/pazhanisamyk/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function NavItem({ to, icon, text, onClick }) {
  return (
    <Nav.Item>
      <Nav.Link as={Link} to={to} onClick={onClick}>
        {icon} {text}
      </Nav.Link>
    </Nav.Item>
  );
}

export default NavBar;
