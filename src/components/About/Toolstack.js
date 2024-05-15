import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDocker } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiJirasoftware,
} from "react-icons/si";

const Toolstack = () => (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {[
      SiVisualstudiocode,
      SiPostman,
      SiJirasoftware,
      SiSlack,
      FaDocker,
    ].map((Icon, index) => (
      <Col key={index} xs={4} md={2} className="tech-icons">
        <Icon />
      </Col>
    ))}
  </Row>
);

export default Toolstack;
