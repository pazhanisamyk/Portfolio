import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiBootstrap,
} from "react-icons/di";
import { FaAngular } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiCss3,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Techstack = () => (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {[
      DiMongodb,
      SiExpress,
      DiReact,
      TbBrandReactNative,
      DiNodejs,
      SiNextdotjs,
      DiHtml5,
      SiCss3,
      DiJavascript1,
      DiGit,
      FaAngular,
      SiPostgresql,
      SiTailwindcss,
      DiBootstrap,
      SiDocker
    ].map((Icon, index) => (
      <Col key={index} xs={4} md={2} className="tech-icons">
        <Icon />
      </Col>
    ))}
  </Row>
);

export default Techstack;
