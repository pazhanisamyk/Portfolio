import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPhp,
  DiHtml5,
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiFlutter,
  SiExpress,
  SiNestjs,
  SiCss3,
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
      SiNestjs,
      DiHtml5,
      SiCss3,
      DiJavascript1,
      DiGit,
      SiFlutter,
      DiPhp,
      SiPostgresql,
      SiRedis,
    ].map((Icon, index) => (
      <Col key={index} xs={4} md={2} className="tech-icons">
        <Icon />
      </Col>
    ))}
  </Row>
);

export default Techstack;
