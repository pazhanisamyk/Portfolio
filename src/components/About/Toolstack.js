import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJirasoftware,
} from "react-icons/si";

const Toolstack = () => (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {[
      SiVisualstudiocode,
      DiGit,
      SiPostman,
      SiJirasoftware,
      FiFigma,
    ].map((Icon, index) => (
      <Col key={index} xs={4} md={2} className="tech-icons">
        <Icon />
      </Col>
    ))}
  </Row>
);

export default Toolstack;
